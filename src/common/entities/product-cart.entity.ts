import {
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './product.entity';
import { Cart } from './cart.entity';

@Table({
  tableName: 'products_carts',
  timestamps: false,
  paranoid: true,
})
export class ProductCart extends Model<ProductCart> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Product)
  @Column({ field: 'prodId', type: DataType.UUID })
  prodId: string;

  @ForeignKey(() => Cart)
  @Column({ field: 'cartId', type: DataType.UUID })
  cartId: string;

  @Column({ field: 'quantity', type: DataType.NUMBER })
  quantity: number;

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

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Cart)
  cart: Cart;
}
