import App from './app';
import PostsController from './posts/posts.controller';
import ProductsController from './products/products.controller';
import 'dotenv/config';
import validatEnv from './utils/validateEnv';

validatEnv();

const app = new App(
  [
    new PostsController(),
    new ProductsController()
  ]
)

app.listen();