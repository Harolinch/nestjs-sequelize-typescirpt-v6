import { Inject, Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import * as models from './shared/db/models';
import { SEQUELIZE_CONNECTION_INSTANCE } from './shared/constants';
import { Sequelize } from 'sequelize';
@Module({
  imports: [
    DatabaseModule.forModels(Object.values(models)),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(
    @Inject(SEQUELIZE_CONNECTION_INSTANCE) sequelize: Sequelize
  ) {
    if (process.env.NODE_ENV === 'development') {      
      sequelize.sync();
    }
  }
}
