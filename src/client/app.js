/**
 * Created by tomoya.igarashi on 2017/02/21.
 */
import 'babel-polyfill';
import Dog from '../shared/dog';

const browserToby = new Dog('Browser Toby');

document.querySelector('.app').innerText = browserToby.bark();
