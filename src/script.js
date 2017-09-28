import configFile from '../config.json';
import backgroundWatermark from './backgroundWatermark';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';
import OktaSignIn from '@okta/okta-signin-widget';


backgroundWatermark(configFile.watermark_text);

var config = {
    ...configFile.OktaSignInWidget,
    processCreds: function (creds, callback) {
        console.info("Executing OktaSignIn.processCreds", {...creds, password: "*****"});
        callback();
    }
};

var oktaSignIn = new OktaSignIn(config);

oktaSignIn.renderEl(
  {el: '#okta-login-container'},

  function success(res) {
    console.info("success:", res);
    return;

  },

  function error(err) {
    // The widget will handle most types of errors - for example, if the user
    // enters an invalid password or there are issues authenticating.
    //
    // This function is invoked with errors the widget cannot recover from:
    // 1. Known errors: CONFIG_ERROR, UNSUPPORTED_BROWSER_ERROR, OAUTH_ERROR
    // 2. Uncaught exceptions
    throw Error(err);
  }
);