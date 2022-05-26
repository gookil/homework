const express = require("express");
const connect = require("./schemas"); //index생략
const app = express();
const port = 3000; 


connect();

const badsRouter = require("./routes/bads") //라우터 경로 연결



app.use(express.json());
app.use("/api", [badsRouter] ); //연결 여기다 하세요!

app.get("/",(req, res)=> {
  res.send("hello world");
})


app.listen(port, () =>{
  console.log(port, "포트로 서버가 켜졌어요");
});