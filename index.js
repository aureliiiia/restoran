import express, { urlencoded } from 'express';
import { aboutController, contactusController, indexController, homeController, editController, foodController, yukController, reservasiController, suksesController } from './controllers/indexController.js';
import { deleteController, submitController, updateController, edittController} from './controllers/submitController.js';


const app = express();

app.use(urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('views'))

app.set("view engine", "ejs")
app.get("/index", indexController)
app.get("/home",homeController)
app.get("/about", aboutController)
app.get("/contactus", contactusController)
app.get("/food", foodController)
app.get("/yuk", yukController)
app.get("/reservasi", reservasiController)
app.get("/sukses", suksesController)

app.get("/delete/:id", deleteController)
app.get("/update/:id", updateController)
app.get("/edit/:id", editController)
app.post("/edit/:id", edittController)

app.post("/submit", submitController)

app.listen(3000, () => {
     console.log("OKE")
})