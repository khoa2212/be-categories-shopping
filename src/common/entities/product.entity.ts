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
  HasMany,
} from 'sequelize-typescript';
import { Category } from './category.entity';
import { ProductCart } from './product-cart.entity';

@Table({
  tableName: 'products',
  timestamps: false,
  paranoid: true,
})
export class Product extends Model<Product> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ field: 'prodName', type: DataType.STRING })
  prodName: string;

  @Column({ field: 'prodPrice', type: DataType.FLOAT })
  prodPrice: number;

  @ForeignKey(() => Category)
  @Column({ field: 'prodCategory', type: DataType.UUID })
  prodCategory: string;

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

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => ProductCart)
  productCarts: ProductCart[];
}
