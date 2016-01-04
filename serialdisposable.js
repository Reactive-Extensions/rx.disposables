'use strict';

/**
* @constructor
* Represents a disposable resource whose underlying disposable resource can
* be replaced by another disposable resource, causing automatic disposal of
* the previous underlying disposable resource.
*/
function SerialDisposable() {
  this.isDisposed = false;
  this._current = null;
}

/**
 * Gets the underlying disposable.
 * @returns {Any} the underlying disposable.
 */
SerialDisposable.prototype.getDisposable = function () {
  return this._current;
};

SerialDisposable.prototype.setDisposable = function (value) {
  var shouldDispose = this.isDisposed;
  if (!shouldDispose) {
    var old = this._current;
    this._current = value;
    old && old.dispose();
  }

  shouldDispose && value && value.dispose();
};

/** Performs the task of cleaning up resources. */
SerialDisposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.isDisposed = true;
    var old = this._current;
    this._current = null;
    old && old.dispose();
  }
};

module.exports = SerialDisposable;
