import routes from "../routes";

export const getJoin = (req,res) => {
	res.render("join", { pageTitle:"Join"});
};
export const postJoin = (req,res) => {
	const {
		body: { name, emial, password, password2}
	} = req;
	if(password !== password2){
		res.status(400);
		res.render("join", { pageTitle:"Join"});
	} else {
		// to do : 사용자 등록
		// to do : 사용자 로그인 상태
		res.redirect(routes.home);
	}
	
};



export const getLogin = (req,res) => {
	res.render("login", { pageTitle:"Login"});

}
export const postLogin = (req,res) => {
	res.redirect(routes.home);
}



export const logout = (req,res) => {
	// 로그아웃 처리하기.
	// res.render("logout", { pageTitle:"Log out"});
	res.redirect(routes.home);

}
export const users = (req,res) => res.render("users", { pageTitle:"Users"});
export const editProfile = (req,res) => res.render("editProfile",{ pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{ pageTitle:"Change Password"});
export const userDetail = (req,res) => res.render("userDetail",{ pageTitle:"User Detail"});