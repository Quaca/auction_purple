import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('item', { path: 'item/:id' });
  this.route('about');
  this.route('privacy-and-policy');
  this.route('terms-and-conditions');
  this.route('register');
  this.route('login');
  this.route('forgot-password');
  this.route('change-password');
});
//{path: 'item/:item_id'}
export default Router;
