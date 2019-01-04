module.exports = {
    devServer: {
        proxy: 'http://localhost:8085/'
    },

    pluginOptions: {
      s3Deploy: {
        registry: undefined,
        awsProfile: 'default',
        region: 'us-east-1',
        bucket: 'datatable-britecore',
        createBucket: false,
        staticHosting: true,
        staticIndexPage: 'index.html',
        staticErrorPage: 'index.html',
        assetPath: 'dist',
        assetMatch: '**',
        deployPath: '/',
        acl: 'public-read',
        pwa: false,
        enableCloudfront: false,
        uploadConcurrency: 5,
        pluginVersion: '3.0.0'
      }
    }
}
