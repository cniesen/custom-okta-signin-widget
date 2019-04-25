Customized Okta Login Widget
============================

Development (local)
-------------------
1. Clone this repo and navigate to the new `custom-okta-signin-widget` folder.

    ```
    git clone https://github.com/cniesen/custom-okta-signin-widget.git
    cd custom-okta-signin-widget
    ```

2. Install Node dependencies.

    ```
    npm install
    ```

3. Update the `config.json` configuration file.

4. Start webpack development server

    ```
    npm start
    ```

4. Point browser to http://localhost:3000


Gradle
------
The npm tasks can be started via gradle.  The benefit is that node/npm doesn't need to be installed.  The cost is a longer build time.

- `gradle start` Deploys local development server and listens on http://localhost:3000.
- `gradle buildDist` Builds the production deployment.

Known Issues
------------

* The okta-signin-widget uses an outdated jQuery version with the CVE-2015-9251 security alert.  Okta is aware of this 
  but has not fixed the issue so far. https://github.com/okta/okta-signin-widget/issues/378 (The default Okta login page
  also the old version of jQuery.)

* bundle.js is large with 1.3 MB.  The size is due to the Okta dependency (their code is huge).  Okta's CDN file isn't any
  smaller.  Even the default Okta login page includes a 1.5 MB js file.