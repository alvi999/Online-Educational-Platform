import{AllUsers} from './src/entities/all-user.entity';
import { Applyinstructor } from './src/entities/applyinstructor.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [Applyinstructor,AllUsers],
  synchronize: true,
};

export default config;
 