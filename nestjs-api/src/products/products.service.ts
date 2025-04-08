import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  //injetar o repository que é a camada vai abstrair o bd
  // anguns serviços do nest é necessário passar um decorator do lado
  // pois o serviço é configurado de forma mais complexa
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: string) {
    return this.productRepo.findOne({
      where: { id },
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepo.update({ id }, updateProductDto);
  }

  remove(id: string) {
    return this.productRepo.delete({ id });
  }
}
