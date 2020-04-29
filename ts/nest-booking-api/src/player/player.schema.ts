
import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
    email: String,
    id: String,
    name: String,
    surname: String,
    phone: String,
    active: Boolean
});