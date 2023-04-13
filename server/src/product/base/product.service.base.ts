/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Product } from "@prisma/client";
import { PaginatedInterface } from "../../util/PaginatedInterface";
import { DbService } from "src/dbService/db.service";

export class ProductServiceBase {
  constructor(protected readonly prisma: DbService) {}

  async count<T extends Prisma.ProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ): Promise<number> {
    return await this.prisma.product.count(args);
  }

  async findMany<T extends Prisma.ProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ): Promise<PaginatedInterface<Product>> {
    const [data, totalCount] = await Promise.all([
      this.prisma.product.findMany(args),
      this.prisma.product.count({ where: { deletedAt: null } }),
    ]);

    return { paginatedResult: data, totalCount };
  }
  async findOne<T extends Prisma.ProductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindUniqueArgs>
  ): Promise<Product | null> {
    return await this.prisma.product.findUnique(args);
  }
  async create<T extends Prisma.ProductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCreateArgs>
  ): Promise<Product> {
    return await this.prisma.product.create<T>(args);
  }
  async createMany<T extends Prisma.ProductCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCreateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.product.createMany<T>(args);
  }
  async update<T extends Prisma.ProductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductUpdateArgs>
  ): Promise<Product> {
    return await this.prisma.product.update<T>(args);
  }
  async delete<T extends Prisma.ProductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductDeleteArgs>
  ): Promise<Product> {
    return await this.prisma.product.delete(args);
  }

  async updateMany<T extends Prisma.ProductUpdateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductUpdateManyArgs>
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.product.updateMany(args);
  }
}