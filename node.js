const axios = require('axios');
axios.get('https://randomuser.me/api/')
    .then(function (res) {
        console.log(res.data)
    });
