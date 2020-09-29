import { ISequelizeConfig } from './interfaces/config';

export const DBConfigs: { [key: string]: ISequelizeConfig } = {
    development: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
    }
}