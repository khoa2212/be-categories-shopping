import {
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { ProductCart } from './product-cart.entity';

@Table({
  tableName: 'carts',
  timestamps: false,
  paranoid: true,
})
export class Cart extends Model<Cart> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @DeletedAt
  @Column({ field: 'deletedAt' })
  deletedAt: Date;

  @CreatedAt
  @Default(new Date())
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt: Date;

  //---- association ----//

  @HasMany(() => ProductCart)
  productCarts: ProductCart[];
}
