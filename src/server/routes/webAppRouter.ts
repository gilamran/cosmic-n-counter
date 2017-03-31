import * as path from 'path';
import * as express from 'express';
import { Router } from 'express';

export function webAppRouter() {
  const router = Router();
  const publicPath = path.join(__dirname, '..', '..', 'public');

  // All the assets are in "public" folder (Done by Webpack)
  router.use('/public', express.static(publicPath));

  // Any route should render the web app html (Generated by Webpack)
  router.get('**', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

  return router;
}

