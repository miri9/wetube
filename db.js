import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// .env 파일 안의 정보 불러옴. 그리고 찾은 모든 변수들을 process.env.key 에 저장할 것임.

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => {
  console.log("Connected to DB!!");
};
const handleError = error => {
  console.log(`X : Error on DB Connection: ${error}`);
};

db.once("open", handleOpen);
db.on("error", handleError);
