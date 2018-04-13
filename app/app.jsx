const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp';


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')
ReactDOM.render(
 <TodoApp/>, document.getElementById('app')
);
