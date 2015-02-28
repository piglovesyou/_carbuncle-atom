
var _mixins = require('./_mixins');
var React = require('react');
var Actions = require('../actions');
var Link = require('../components/Link');

var Store = require('../stores');

var Index = React.createClass({

  createState() {
    var store = Store.get();
    return {
      count: store.count
    };
  },

  mixins: [_mixins],

  render() {
    return (
      <div className="app-index container">
        <h1><i className="fa fa-diamond"></i> Index</h1>
        <button className="btn" onClick={this.onClick}>Clicked {this.state.count} times</button>&nbsp;
        <Link href="/setting">Setting</Link>
      </div>
    );
  },

  onClick() {
    Actions.increment();
  }

});

module.exports = Index;
