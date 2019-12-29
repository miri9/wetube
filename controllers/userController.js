import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      // 계정 생성
      await User.register(user, password);
      // 생성한 계정을 등록 register
      next();
    } catch (error) {
      console.log(error);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});
//"local"=우리가 설치한 strategy 이름.

// github
export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      user.githubId = id;
      user.avatarUrl = avatarUrl;
      user.save();
      return cb(null, user); // 이후 쿠키에 유저 저장.
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

// facebook

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = `http://graph.facebook.com/${id}/picture?type=large`;

      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id,
      avatarUrl: `http://graph.facebook.com/${id}/picture?type=large`
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

//

export const logout = (req, res) => {
  req.logout(); //passport 기능
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const changePassword = (req, res) =>
res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.fineId(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
