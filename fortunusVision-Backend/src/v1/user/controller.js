const User = require("../../../models/User");
const {
  addUser,
  getByEmail,
  addChatUser,
  getUserById,
  getByUserType,
  addChatExpert,
  getAppointments,
  ServiceaddAppointment,
} = require("./services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function register(req, res) {
  try {
    //encrypting password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //adding inputs to mongodb
    const addUserResult = await addUser(req.body, hashedPassword);
    return res.send({ user: addUserResult._id });
  } catch (error) {
    return res.send(error);
  }
}
async function signIn(req, res) {
  try {
    //check validity of email
    const user = await getByEmail(req.body.email);
    if (user == null) return res.send({ err: "Invalid credentials" });

    //check validity of password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.send({ err: "Invalid credentials" });

    //create jwt token
    const token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET);

    return res.header("auth-token", token).send({
      user_id: user._id,
      token: token,
      userName: user.userName,
      coins: user.coins,
      chats: user.chat,
      appointment: user.appointment,
      call_history: user.call_history,
      user_type: user.user_type,
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
async function getExperts(req, res) {
  if (req.body.expertId) {
    const result = await getUserById(req.body.expertId);
    console.log(result);
    return res.send(result);
  }
  const result = await getByUserType(req.body.userType);
  return res.send(result);
}
async function addChat(req, res) {
  try {
    const user = await getUserById(req.body.user_id);
    const expert = await getUserById(req.body.expert_id);
    await addChatExpert(req.body, user);
    await addChatUser(req.body, expert);
  } catch (error) {
    console.log(error);
  }
  return res.send({ message: "Success" });
}

async function addAppointment(req, res) {
  try {
    const user = await getUserById(req.body.user_id);
    await ServiceaddAppointment(req.body, user);
  } catch (err) {
    console.log(err);
  }
  return res.send({ message: "Success" });
}

async function getAvailability(req, res) {
  try {
    const appointments = await getAppointments(req.query.Id);
    return res.send(appointments);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function setAppointment(req, res) {
  try {
    const user = await getUserById(req.body.user_id);
    const expert = await getUserById(req.body.expert_id);
    user.appointment.push({
      user_id: req.body.user_id,
      expert_id: req.body.expert_id,
      date: { day: req.body.day, time: req.body.time },
    });
    expert.appointment.push({
      user_id: req.body.user_id,
      expert_id: req.body.expert_id,
      date: { day: req.body.day, time: req.body.time },
    });
    user.save();
    expert.save();
  } catch (err) {
    console.log(err);
    return err;
  }
  return res.send({ message: "Success" });
}

module.exports = {
  register,
  signIn,
  getExperts,
  addChat,
  addAppointment,
  getAvailability,
  setAppointment,
};
