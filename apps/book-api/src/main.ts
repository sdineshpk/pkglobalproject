import * as express from 'express';
import * as path from 'path';
import {routes} from './api-routes/app.routes';
import * as OpenApiValidator from 'express-openapi-validator';
import * as log4js from 'log4js';
const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

//Logger
const log = log4js.getLogger("app");
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

const spec = path.join("C:/Users/sdinesh/angular_work/pkglobal/apps/book-api/", 'api.yaml');
console.log('test',__dirname);
app.use('/spec', express.static(spec));
app.use(
  OpenApiValidator.middleware({
    apiSpec: 'C:/Users/sdinesh/angular_work/pkglobal/apps/book-api/api.yaml',
    validateRequests: true, // <-- to validate request
    validateResponses: true,
  }),
);

app.use('/',routes);

app.use((err, req, res, next) => {
  
  console.error(err); // dump error to console for debug
  log.error("Something went wrong:", err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

