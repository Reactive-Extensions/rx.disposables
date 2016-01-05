'use strict';

var Disposable = require('./disposable');

function InnerDisposable(disposable) {
  this._disposable = disposable;
}

InnerDisposable.prototype.dispose = function () {
  var temp = this._disposable;
  this._disposable = null;
  temp && temp._release();
};

/**
 * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
 */
function RefCountDisposable(disposable) {
  this._disposable = disposable;
  this.isDisposed = false;
  this._isPrimaryDisposed = false;
  this._count = 0;
}

/**
 * Disposes the underlying disposable only when all dependent disposables have been disposed
 */
RefCountDisposable.prototype.dispose = function () {
  if (!this.isDisposed && !this._isPrimaryDisposed) {
    this._isPrimaryDisposed = true;
    if (this._count === 0) {
      this.isDisposed = true;
      this._disposable.dispose();
      this._disposable = null;
      this.isDisposed = true;
    }
  }
};

RefCountDisposable.prototype._release = function () {
  if (this._disposable) {
    this._count--;
    if (this._isPrimaryDisposed && this._count === 0) {
      this._disposable.dispose();
      this._disposable = null;
      this.isDisposed = true;
    }
  }
};

/**
 * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
 * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
 */
RefCountDisposable.prototype.getDisposable = function () {
  if (this.isDisposed) {
    return Disposable.empty;
  } else {
    this._count++;
    return new InnerDisposable(this);
  }
};

module.exports = RefCountDisposable;
