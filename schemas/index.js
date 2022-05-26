const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://test1:sparta@cluster0.vw1dr.mongodb.net/?retryWrites=true&w=majority")

    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect; //연결
