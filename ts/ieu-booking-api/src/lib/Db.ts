import config from 'config';
import mongoose from 'mongoose';

export class Db {
    static connect(): typeof mongoose {
        mongoose.connect(config.get('dbURL'), { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.once('open', () => {
            console.info('Connected to Mongo via Mongoose');
        });
        mongoose.connection.on('error', (err) => {
            console.error('Unable to connect to Mongo via Mongoose', err);
        });
        return mongoose;
    }

}