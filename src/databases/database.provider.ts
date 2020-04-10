import { createConnection  } from 'typeorm';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3333,
      username: 'nestuser',
      password: 'nestpwd',
      database: 'nest',
      entities: ['dist/**/**.entity.js'],
      // logging: true,
      synchronize: true,
      /*
    dropSchema: true,
    keepConnectionAlive: true,
    retryAttempts: 2,
    retryDelay: 1000,
    */
    }),
  },
];
