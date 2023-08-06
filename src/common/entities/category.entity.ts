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
import { Product } from './product.entity';

@Table({
  tableName: 'categories',
  timestamps: false,
  paranoid: true,
})
export class Category extends Model<Category> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ field: 'categoryName', type: DataType.STRING })
  categoryName: string;

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

  @HasMany(() => Product)
  products: Product[];
}
