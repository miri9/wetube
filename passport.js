/*passport-local 즉 strategy 관련 설정.*/

import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
/*쿠키에는 오직 user.id 만 담아 보내게끔 한다*/
passport.deserializeUser(User.deserializeUser());
/*지름길을 쓰는 이유 - 거의 모든 사람들이 이런 방식으로 쿠키를 사용하므로. */
