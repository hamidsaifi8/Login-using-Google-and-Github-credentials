const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../model/user"); 
require("dotenv").config();

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const email = profile.emails?.[0]?.value || "";

        const existingUser = await User.findOne({
          providerId: profile.id,
          provider: "github",
        });

        if (existingUser) return done(null, existingUser);

        const newUser = new User({
          githubId: profile.id,
          displayName: profile.displayName || profile.username,
          email: profile.emails && profile.emails[0].value,
          photo: profile.photos && profile.photos[0].value,
        });

        await newUser.save();
        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
