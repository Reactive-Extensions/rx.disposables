'use strict';

/**
* @constructor
* Represents a disposable resource which only allows a single assignment of
* its underlying disposable resource. If an underlying disposable resource has
* already been set, future attempts to set the underlying disposable resource
* will throw an Error.
*/
function SingleAssignmentDisposable () {
  this.isDisposed = false;
  this._current = null;
}

/**
 * Gets the underlying disposable. After disposal, the result of getting
 * this method is null.
 * @returns {Any} the underlying disposable.
 */
SingleAssignmentDisposable.prototype.getDisposable = function () {
  return this._current;
};

/**
 * Sets the underlying disposable. Throws an error if the
 * SingleAssignmentDisposable has already been assigned to.
 * @param {Any} value the underlying disposable to set.
 */
SingleAssignmentDisposable.prototype.setDisposable = function (value) {
  if (this._current) { throw new Error('Disposable has already been assigned'); }
  var shouldDispose = this.isDisposed;
  !shouldDispose && (this._current = value);
  shouldDispose && value && value.dispose();
};

/** Performs the task of cleaning up resources. */
SingleAssignmentDisposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.isDisposed = true;
    var old = this._current;
    this._current = null;
    old && old.dispose();
  }
};

module.exports = SingleAssignmentDisposable;
