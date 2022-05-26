const express = require("express");
const Bads = require("../schemas/bads")
const router = express.Router();


router.get("/", async (req, res) => {

    const { all } = req.query;

    const bads = await Bads.find({all}, {_id: 0, password : 0, content : 0});

    
    res.json({
        bads: bads.sort((a, b) => a["uploadDate"] - b["uploadDate"])
    })

});

router.post('/blogs', async (req, res) => {
    const { title, name, password, content } = req.body;
    const newbads = await Bads.create({
      title,
      name,
      password,
      content,
    });
    res.json({ bads: newbads });
  });
  

    router.get("/blogs", async (req, res) => {

        const { all } = req.query;
    
        const bads = await Bads.find({all}, {_id: 0, password : 0});
    
        console.log(bads);
    
        // 오름차순으로 데이터 정렬
        res.json({
            bads: bads.sort((a, b) => a["uploadDate"] - b["uploadDate"])
        })
    
    });

    router.put("/blogs", async (req, res) => {
        const { title, password, content } = req.body;
        
        
        const bads = await Bads.find({bads}); 
        if (!bads.length) {
            return res.status(400).json({ success: false, errorMessage: "게시글이 존재하지 않습니다." }); 
            }
        
             
        if (Number(password) != Number(bads[0].password)) {
            return res.status(400).json({ success: false, errorMessage: "비밀번호가 다릅니다." }); 
        }
    
        
        await Bads.updateOne({title: title}, {$set : {content}});
    
        res.json({success: true});
    });

    router.delete("/blogs", async (req, res) => {
        const { title, password} = req.body; 
        
       
        const bads = await Bads.find({title});
        if (!bads.length) {
            return res.status(400).json({ success: false, errorMessage: "게시글이 존재하지 않습니다." }); 
            }
        
            
        if (Number(password) != Number(bads[0].password)) {
            return res.status(400).json({ success: false, errorMessage: "비밀번호가 다릅니다." }); 
        }
    
        // 게시글 삭제하기
        await Bads.deleteOne({ title });
    
        res.json({success: true});
    
        
    });



module.exports = router;

