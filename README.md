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

3. Update the `config-dev.json` and `config-prod.json` configuration file.

4. Start webpack development server

    ```
    npm start
    ```

5. Point browser to http://localhost:3000


Gradle
------
The npm tasks can be started via gradle.  The benefit is that node/npm doesn't need to be installed.  The cost is a longer build time.

Environment | Config File      | Gradle Build Command | Node Build Command
------------|------------------|----------------------|-------------------
Production  | config-prod.json | gradlew buildProd    | npm run build-prod
Development | config-dev.json  | gradlew buildDev     | npm run build-dev

The gradle tasks downloads and installs node and executes the corresponding npm task.  The npm build copies the environment
specific config file to `config.json` before the build. After the build all files needed for the deploy are found in the
`dist/` directory.

Known Issues
------------
 
* Okta's CDN file is large with 1 MB. Even the default Okta login page includes a 1.5 MB js file.  