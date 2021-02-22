module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'derprl9h5'),
            api_key: env.int('CLOUDINARY_KEY', 238378572495487),
            api_secret: env('CLOUDINARY_SECRET', 'YBwfVckEHsvbvsXFyd4Qps0AMog'),
        },
    },
});