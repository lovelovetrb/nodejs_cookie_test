const cookieSession = require("cookie-session");
const express = require("express");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 10000,
  })
);

app.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/html");
  if (req.session.views) {
    req.session.views++;
    res.write("<p>views: " + req.session.views + "</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("<p>welcome to the session demo. refresh! -- cookie-session --</p>");
  }
});

app.listen(3030);