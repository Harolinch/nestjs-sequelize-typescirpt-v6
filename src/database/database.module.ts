import { DynamicModule, Module } from '@nestjs/common';
import { BaseModel } from 'src/shared/db/BaseModel.model';
import { DBProviders } from './database.providers';

@Module({})
export class DatabaseModule {
    public static forModels(models: (typeof BaseModel)[]): DynamicModule{
        const providers = DBProviders(models);
        return {
            global: true,
            module: DatabaseModule,
            providers: [...providers],
            exports: [...providers],            
        }
    }
}
