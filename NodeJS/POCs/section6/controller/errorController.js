const path = require('path');
const rootPath = require('../util/root_path');

error404 = (req,res,next) => {
                // res.status(404).sendFile(path.join(rootPath,'views','page-not-found.html'));
                res.status(404).send('<h1>404 Page not found</h1>');
            };

module.exports = {error404};