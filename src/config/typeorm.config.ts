import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mariadb',
  port: 3306,
  host: process.env.MARIADB_HOST,
  username: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
  charset: 'utf8mb4',
  logging: true,
};
