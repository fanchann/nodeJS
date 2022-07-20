const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Ini Homepage'
        }
    },
    {
        method: 'GET',
        path: '/user/{username?}',
        handler: (request, h) => {
            const {
                username = 'Tamu!'
            } = request.params;b 
            const {
                lang = 'Bumi?'
            } = request.query;

            if (lang === 'id') {
                return `Hello ${username} From id!`
            }

            return `Hello ${username}!`



        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {
                username,
                password
            } = request.payload;
            return `Welcome ${username}`
        }

    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return 'This method POST!'
        }

    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return '<h1 style="color:blue; text-decoration:underline; text-align:center;">Kontol</h1>'
        }
    }
];

module.exports = routes;