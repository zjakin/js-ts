import 'reflect-metadata';
import bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { IocResolver } from './lib/IocResolver';
import { Db } from './lib/Db';
import './controllers/PlayerController';

const db = Db.connect();
const { container } = new IocResolver({ db });
const server = new InversifyExpressServer(container);


server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
});

const app = server.build();

app.listen(3000, () => console.log('ready on:', 3000));
