import { Sequelize } from "sequelize";
import { SEQUELIZE_CONNECTION_INSTANCE } from "src/shared/constants";
import { ISequelizeConfig } from "./interfaces/config";
import { DBConfigs } from './database.config';
import { BaseModel } from '../shared/db/BaseModel.model';

export const DBProviders = (models: (typeof BaseModel)[]) => {
    return [
        {
            provide: SEQUELIZE_CONNECTION_INSTANCE,
            useFactory: () => {
                const config: ISequelizeConfig = DBConfigs.development;
                const sequelize = new Sequelize({
                    dialect: 'postgres',
                    ...config,
                });
                models.forEach((model: typeof BaseModel) => {
                    model.factory(sequelize);
                });
                models.forEach((model: typeof BaseModel) => {
                    model.associate();
                })
                return sequelize;
            },
        },
    ]
};