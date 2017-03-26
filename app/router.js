import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');
  this.route('about');
  this.route('404');
  this.route('flowers');
});

export default Router;
