import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';
import { Product } from 'src/common/entities/product.entity';
import { Category } from 'src/common/entities/category.entity';
import { ProductCart } from 'src/common/entities/product-cart.entity';
import { Cart } from 'src/common/entities/cart.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.sequelizeOrmConfig,
        dialect: configService.sequelizeOrmConfig.dialect as Dialect,
      });

      // Models
      sequelize.addModels([Category, Product, Cart, ProductCart]);

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
