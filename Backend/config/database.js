const mongoose = require('mongoose');
require('dotenv').config();
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTOPOLOGY: true,
    }).then(() => console.log('Connected to database')).
        catch((error) => {
            console.log("DB not connected");
            console.error(error);
            process.exit(1);
        });
}