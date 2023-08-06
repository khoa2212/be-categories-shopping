import {
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: false,
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

  @Column({ field: 'prodCategory', type: DataType.STRING })
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
}
