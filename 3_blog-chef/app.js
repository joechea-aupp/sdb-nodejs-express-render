import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    user: "Joe Doe",
    posts: [
      {
        id: 1,
        author: "Joe Doe",
        title: "First Post",
        content: "This is the first post",
      },
      {
        id: 2,
        author: "Jane Smith",
        title: "Second Post",
        content: "This is the second post",
      },
      {
        id: 3,
        author: "Srey Pov",
        title: "Third Post",
        content: "This is the third post",
      },
    ],
  });
});

app.get("/admin/logout", (req, res) => {
  res.redirect("/admin/login");
});

app.get("/admin/approve", (req, res) => {
  res.rediret("/dashboard");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => res.redirect("/dashboard"));

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
