const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{

    const {name,email,password,role} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const sql = "INSERT INTO Users (name,email,password,role) VALUES (?,?,?,?)";

    db.query(sql,[name,email,hashedPassword,role],(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({message:"User Registered"});
    });
};

exports.login = (req,res)=>{

    const {email,password} = req.body;

    const sql = "SELECT * FROM Users WHERE email=?";

    db.query(sql,[email], async (err,result)=>{

        if(result.length===0)
            return res.status(401).json({message:"User not found"});

        const user = result[0];

        const valid = await bcrypt.compare(password,user.password);

        if(!valid)
            return res.status(401).json({message:"Invalid password"});

        const token = jwt.sign(
            {id:user.id,role:user.role},
            "secretkey",
            {expiresIn:"1h"}
        );

        res.json({token,user});
    });
};