import configFile from '../config.json';
import getRedirectUrl from './getRedirectUrl';
import backgroundWatermark from './backgroundWatermark';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';
import OktaSignIn from '@okta/okta-signin-widget';

// ### The OktaSignIn module doesn't work properly so we use CDN.
// import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
// import '@okta/okta-signin-widget/dist/css/okta-theme.css';
// import OktaSignIn from '@okta/okta-signin-widget';

// Capture the redirect URL first thing as the sign-in page is loaded.
// This will tell us where to go after sign-in.
const redirect_url = getRedirectUrl();

backgroundWatermark(configFile.watermarkText);

var oktaSignIn = new OktaSignIn(configFile.OktaSignInWidget);
oktaSignIn.session.exists(function (exists) {

    // Session found...
    if (exists) {
        window.location = redirect_url;
    } else {
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