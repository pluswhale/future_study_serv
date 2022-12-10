const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
    if(req.user) {
        res.status(200).json({
            success: true,
            message: "Google authntication was successfull.",
            user: req.user
        })
    }
});

router.get("/logout", (res, req) => {
    res.logOut();
    req.redirect(CLIENT_URL);
})

router.get("/login/falied", (req, res) => {
    res.status(401).json({
        success: false,
        message: "Google authntication was faled. Please try again"
    })
});

router.get("/google", passport.authenticate("google",{ scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));

module.exports = router;