import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('about');
  this.route('flowers');
  this.route('404', {path:'*'});
});

export default Router;
