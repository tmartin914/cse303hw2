// This is the configuration information for Google OAuth.  Use Google
// Developer Console to create a new web app, use that to fill in your
// clientID and clientSecret, and then you should be good to go.
module.exports = {
    'googleAuth' : {
        'clientID'      : '144921874115-ea7r2r4dkh301ql3g7hcn17vug3506rse.apps.googleusercontent.com', // TODO: put your client ID, from Google Developer Console
        'clientSecret'  : 'DShDA_WA8dx3pAO_va_ZVYq3', // TODO: put your client secret, from Google Developer Console
        'callbackURL'   : 'http://52.90.112.77/auth/google/callback'  // TODO: you need to use your AWS IP and port, e.g., 'http://100.2.66.4:8080/auth/google/callback'
    },
    // When this next field is true, user account creation is enabled.  Note
    // that the whole web app doesn't have local state.  You can set this
    // true, start the app, build accounts, stop the app, set this false, and
    // re-start the app... or you can set this true, start a second instance
    // of the app, create accounts, and then un-set it and stop the second
    // instance.
    'allowNewUser' : false
}
