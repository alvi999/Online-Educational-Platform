import { Coursereview } from 'src/entities/coursereview.entity';
import{AllUsers} from './src/entities/all-user.entity';
import { Applyinstructor } from './src/entities/applyinstructor.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Newcourse } from 'src/entities/newcourse.entity';
import { Forum } from 'src/entities/forum.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [Applyinstructor,AllUsers,Coursereview,Newcourse,Forum],
  synchronize: true,
};

export default config;
 