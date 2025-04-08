import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // varchar(255)
  name: string;

  @Column() // varchar(255)
  description: string;

  @Column() // varchar(255)
  image_url: string;

  @Column() // decimal(10, 2)
  price: number;
}
