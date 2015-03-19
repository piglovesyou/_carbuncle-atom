
var React = require('react');
var {HistoryLocation} = require('react-router');
var Path = require('path');

var Link = React.createClass({
  render() {
    return (
      <div className={'iframe ' + (this.props.cssModifier ? 'iframe--' + this.props.cssModifier : '')}>
        <form className="iframe__form" action="">
          <input type="text"
                 placeholder="URLを入力"/>
          <button className="btn">Go</button>
        </form>
        <iframe className="iframe__iframe" src="">
        </iframe>
      </div>
    );
  }
});
module.exports = Link;

function pushState(path) {
  return function(e) {
    e.preventDefault();
    HistoryLocation.push(Path.join(__dirname, path));
  };
}
