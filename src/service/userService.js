import db from "../models/index";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
  console.log("11111111111111111111111111111111111111111111");
  return new Promise(async (resolve, reject) => {
    try {
      console.log("email", email, "password", password);
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "password"],
          where: {
            email: email,
          },
          raw: true,
        });

        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errorCode = 0;
            userData.errorMessage = "ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errorCode = 3;
            userData.errorMessage = `Wrong password`;
          }
        } else {
          userData.errorCode = 2;
          userData.errorMessage = `User isn't found`;
        }
      } else {
        userData.errorCode = 1;
        userData.errorMessage =
          "Your Email isn't exist in databse. Plz use email other to sign in";
      }
      console.log(userData);
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (emailUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          email: emailUser,
        },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = async (data) => {
  console.log(
    "..............................................................."
  );
  console.log(data);
  console.log(
    "..............................................................."
  );
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordUserByBcrypt = await hashPasswordNewUser(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordUserByBcrypt,
      });
      resolve("ok ! tao new user thanh cong !");
    } catch (e) {
      reject(e);
    }
  });
};

let hashPasswordNewUser = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  createNewUser: createNewUser,
};
