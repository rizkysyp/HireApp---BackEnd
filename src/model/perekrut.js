const Pool = require('../config/db')

const insertData = (data) => {
    const {id,name,password,email,phonenumber,profile,skill,auth,image,idcompany} = data;
    return Pool.query(`INSERT INTO perekrut(id,name,password,email,phonenumber,profile,skill,auth,image,idcompany) VALUES(${id},'${name}','${password}','${email}',${phonenumber},'${profile}','${skill}',${auth},'${image}',${idcompany})`);
}

const getPerekrut = () => {
    return Pool.query(`SELECT * FROM perekrut`);
}
module.exports = {insertData,getPerekrut}