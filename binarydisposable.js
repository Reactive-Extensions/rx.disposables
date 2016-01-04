'use strict';

/**
* Represents a group of disposable resources that are disposed together.
* @constructor
* Creates a new group of disposable resources that are disposed together.
* @param [Any] first The first disposable resoruce to add to the group.
* @param [Any] second The second disposable resoruce to add to the group.
*/
function BinaryDisposable(first, second) {
  this._first = first;
  this._second = second;
  this.isDisposed = false;
}

/**
 * Disposes all disposables in the group.
 */
BinaryDisposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.isDisposed = true;
    var old1 = this._first;
    this._first = null;
    old1 && old1.dispose();
    var old2 = this._second;
    this._second = null;
    old2 && old2.dispose();
  }
};

module.exports = BinaryDisposable;
