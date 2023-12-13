const HeroInfo = require('../models/HeroInfoModel');

exports.CreateHeroInfo = async (req, res)=> {
    try{
       console.log(req.body);
        const data = await HeroInfo.create(req.body);
        
        res.status(201).json({success: true, message : "data created successfully"});
   
    } catch (err){
        res.status(400).json({success: false, message : "data not created"});
    }
}

exports.getHeroInfo = async (req, res)=> {
    try{
        const infoo = await HeroInfo.find();
        res.status(200).json({success: true, infoo})

    } catch (err){
        res.status(500).json({success: false});

    }
}