import { Model, Sequelize } from 'sequelize';

export abstract class BaseModel extends Model {
    public static factory(sequelize: Sequelize): void {};
    public static associate(): void {};
}