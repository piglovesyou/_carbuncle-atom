
var _mixins = require('./_mixins');
var React = require('react');
var Actions = require('../actions');
var Link = require('../components/Link');
var Nav = require('../components/Nav');
var Editor = require('../components/Editor');
var IFrame = require('../components/IFrame');
var Scenario = require('../components/Scenario');

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
      <div className="app-index">
        <Nav />
        <Editor />
        <div className="bottom-content">
          <IFrame></IFrame>
          <Scenario></Scenario>
        </div>
      </div>
    );
  },

  onClick() {
    Actions.increment();
  }

});

module.exports = Index;
