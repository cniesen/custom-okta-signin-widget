import configFile from '../config.json';
import queryString from 'query-string';

export default function getRedirectUrl() {
    const urlQueryVars = queryString.parse(window.location.search);

    if (urlQueryVars.RelayState) {
        // Used for standard Okta redirected logins.
        return configFile.OktaSignInWidget.baseUrl + decodeURIComponent(urlQueryVars.RelayState)
    } else if (urlQueryVars.fromURI) {
        // Not sure when this is used, Okta told us to put it in.
        return decodeURIComponent(urlQueryVars.fromURI)
    } else if (urlQueryVars.redirect_url) {
        // Our custom redirects for legacy systems.
        return decodeURIComponent(urlQueryVars.redirect_url);
    } else {
        // Default redirect to Okta portal. I.e. when going directly to the login page.
        return configFile.OktaSignInWidget.baseUrl;
    }
}