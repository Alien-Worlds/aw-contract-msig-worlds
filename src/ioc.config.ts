/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/storage-mongodb';

import { MsigWorldsActionMongoMapper } from './actions/data/mappers';
import { MsigWorldsActionMongoSource } from './actions/data/data-sources';
import { MsigWorldsActionRepository } from './actions/domain/repositories';
import { MsigWorldsContractService } from "./services/msig-worlds-contract.service";
import { MsigWorldsContractServiceImpl } from "./services/msig-worlds-contract.service-impl";
import { MsigWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { MsigWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { MsigWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupMsigWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<MsigWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new MsigWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new MsigWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<MsigWorldsActionRepository>(MsigWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupMsigWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<MsigWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new MsigWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new MsigWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<MsigWorldsDeltaRepository>(MsigWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupMsigWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): MsigWorldsContractService => {
  const service = new MsigWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<MsigWorldsContractService>(MsigWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
