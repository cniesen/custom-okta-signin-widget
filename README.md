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

4. Start webpack development server

    ```
    npm start
    ```

4. Point browser to http://localhost:3000

    ```
    npm start
    ```

Preview Deployment
------------------
Use the Jenkins job.  The `npm run build-preview` command build the login widget for the preview 
environment.  The config-preview.json configurations are used.  Deploy all the files from the `dist/`
directory to the server.

Preview Deployment
------------------
Use the Jenkins job.  The `npm run build-production` command build the login widget for the production 
environment.  The config-production.json configurations are used.  Deploy all the files from the `dist/`
directory to the server.

Gradle
------
The npm tasks can be started via gradle.  The benefit is that node/npm doesn't need to be installed.  The cost is a longer build time.

- `gradle start` Deploys local development server and listens on http://localhost:3000.
- `gradle buildPreview` Builds the preview deployment.
- `gradle buildProduction` Builds the production deployment.