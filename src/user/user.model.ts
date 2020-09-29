import { DataTypes, Model, Sequelize } from "sequelize";
import { BaseModel } from '../shared/db/BaseModel.model';

interface UserAttributes {
    name: string;
    phone: string;
}

export class User extends BaseModel implements UserAttributes {
    name: string;
    phone: string;

    //Override
    public static factory(sequelize: Sequelize) {        
        User.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,                
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        }, {
            modelName: 'User',
            tableName: 'users',
            sequelize,
        });
    }

    //Override
    public static associate() {
        console.log('we ran associations for model User');
    }
}