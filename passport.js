/*passport-local 즉 strategy 관련 설정.*/

import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());
/*startegy 를 사용하게끔 하기. 이 경우 p-local-mongoose 즉 모델 User 의 것. 여기서 알 수 있듯 p-local은 passport의 shortcut 버전이라 할 수 있다.*/
