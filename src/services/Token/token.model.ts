import { ValueProvider } from '@nestjs/common';
import { Column, Table } from 'sequelize-typescript';
import { BaseModel } from 'src/base/base-model';

@Table({
  tableName: 'Token',
})
export class TokenModel extends BaseModel {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  symbol: string;

  @Column({
    allowNull: false,
  })
  totalSupply: number;

  @Column({})
  contractAddress: string;
}

export const TOKEN_REPOSITORY = Symbol.for('TOKEN_REPOSITORY');
export const TokenRepository: ValueProvider = {
  provide: TOKEN_REPOSITORY,
  useValue: TokenModel,
};
