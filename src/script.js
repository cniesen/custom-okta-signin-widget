import configFile from '../config.json';
import getRedirectUrl from './getRedirectUrl';
import backgroundWatermark from './backgroundWatermark';

// ### The OktaSignIn module doesn't work properly so we use CDN.
// ### (This statement is outdated. A reevaluation is suggested.  However, since CDN works pretty nicely no recent attempts have been made)
// import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
// import '@okta/okta-signin-widget/dist/css/okta-theme.css';
// import OktaSignIn from '@okta/okta-signin-widget';

// Capture the redirect URL first thing as the sign-in page is loaded.
// This will tell us where to go after sign-in.
const redirect_url = getRedirectUrl();

backgroundWatermark(configFile.watermarkText);

var oktaSignIn = new OktaSignIn(configFile.OktaSignInWidget);
oktaSignIn.authClient.session.exists()
    .then(function(exists) {
        if (exists) {
            // logged in
            window.location = redirect_url;
        } else {
            // not logged in
            oktaSignIn.renderEl(
                {el: '#okta-login-container'},
                function success(res) {
                    if (res.status === 'SUCCESS') {
                        res.session.setCookieAndRedirect(redirect_url);
                    }
                }
            );
        }

    });