import mongoose from "mongoose";
// import dotenv from "dotenv";

mongoose.connect("mongodb://localhost:27017/we-tube",
	{
		useNewUrlParser: true,
		useFindAndModify: false
	}
);

const db = mongoose.connection;
// mongo와의 연결. 이 부분은 나중에 export 하여 사용하게 될 것.

const handleOpen = () => {
	console.log("Connected to DB!!");
} 
const handleError = (error) => {
	console.log(`X : Error on DB Connection: ${error}`);
}

db.once("open", handleOpen);
// 한번만 연다는 뜻.
db.on("error", handleError);