const employeModel = require("../model/employe_model");
const bcrypt = require("bcrypt");
function userLogin() {
  return {
    registerPage(req, res) {
      res.render("./FORM/registerForm");
    },
    async postRegister(req, res) {
      const { name, email, password, address, city, zip } = req.body;

      // hash password
      const hashPassword = await bcrypt.hash(password, 8);
      console.log(hashPassword);

      const employe = await new employeModel({
        name,
        email,
        password,
        address,
        city,
        zip,
      });

      employe
        .save()
        .then((result) => {
          console.log("saved");
        })
        .catch((err) => {
          console.log("cant save");
        });

      res.redirect("/Homepage");
    },
    async AFterRegister(req, res) {
      const User = await employeModel.find();

      return res.render("homepage", { User });
    },
    async editUser(req, res) {
      const { id } = req.params;
      try {
        const getData = await employeModel.findById({ _id: id });
        res.render("./FORM/updateForm", { userData: getData });
      } catch (err) {
        console.log("error");
      }
    },
    async update(req, res) {
      const { id } = req.params;
      console.log(id);
      const { name, email, password, address, city, zip } = req.body;
      try {
        const updateUser = await employeModel.updateOne(
          { _id: id },
          { name, email, password, address, city, zip }
        );
        res.redirect("/Homepage");
      } catch (err) {
        console.log("Cant update");
      }
    },
    deleteUser(req, res) {
      const { id } = req.params;
      employeModel
        .deleteOne({ _id: id })
        .then((result) => {
          console.log("Deleted Blog Sucessfully");
          res.redirect("/Homepage");
        })
        .catch((err) => {
          console.log("Unable to delted:- ", err);
        });
    },
  };
}

module.exports = userLogin;
