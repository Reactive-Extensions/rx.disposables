'use strict';

/**
* Represents a group of disposable resources that are disposed together.
* @constructor
* Creates a new group of disposable resources that are disposed together.
* @param [Any] disposables Disposable resources to add to the group.
*/
function NAryDisposable(disposables) {
  this._disposables = disposables;
  this.isDisposed = false;
}

/**
 * Disposes all disposables in the group.
 */
NAryDisposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.isDisposed = true;
    for (var i = 0, len = this._disposables.length; i < len; i++) {
      this._disposables[i].dispose();
    }
    this._disposables.length = 0;
  }
};

module.exports = NAryDisposable;
