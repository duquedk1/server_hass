import express from "express";
import { userCtrl, receiptsCtrl, headLineCtrl } from "./controllers/index.js";
import { usersRoutes, receiptsRoutes, headLineRoutes } from "./routes/index.js";

//cretate app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mi api");
});

//routes users
app.get(usersRoutes.GET, userCtrl.getAll);
app.get(usersRoutes.GET_ONE, userCtrl.getOne);
app.post(usersRoutes.CREATE, userCtrl.create);
app.put(usersRoutes.UPDATE, userCtrl.update);
app.delete(usersRoutes.DELETE, userCtrl.deleteOne);

app.get(receiptsRoutes.GET, receiptsCtrl.getAll);
app.get(receiptsRoutes.GET_ONE, receiptsCtrl.getOne);
app.post(receiptsRoutes.CREATE, receiptsCtrl.create);
app.put(receiptsRoutes.UPDATE, receiptsCtrl.update);
app.delete(receiptsRoutes.DELETE, receiptsCtrl.deleteOne);

app.get(headLineRoutes.GET, headLineCtrl.getAll);
app.get(headLineRoutes.GET_ONE, headLineCtrl.getOne);
app.post(headLineRoutes.CREATE, headLineCtrl.create);
app.put(headLineRoutes.UPDATE, headLineCtrl.update);
app.delete(headLineRoutes.DELETE, headLineCtrl.deleteOne);


//Launch server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Initialized server...");
});
