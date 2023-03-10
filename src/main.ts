import 'reflect-metadata';
import {Container} from 'inversify';
import Application from './app/application.js';
import {applicationContainer} from './app/application.container.js';
import {Component} from './types/component.types.js';
import {userContainer} from './modules/user/user.container.js';
import {locationContainer} from './modules/location/location.container.js';
import {offerContainer} from './modules/offer/offer.container.js';
import {commentContainer} from './modules/comment/comment.container.js';
import { favoriteContainer } from './modules/favorite/favorite.container.js';

const mainContainer = Container.merge(
  applicationContainer,
  userContainer,
  locationContainer,
  offerContainer,
  commentContainer,
  favoriteContainer
);

async function bootstrap() {
  const application = mainContainer.get<Application>(Component.Application);
  await application.init();
}
bootstrap();
