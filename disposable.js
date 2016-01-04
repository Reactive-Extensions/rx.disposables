'use strict';

function noop () { }

var isFunction = module.exports = (function () {
  var isFn = function (value) {
    return typeof value === 'function' || false;
  };

  // fallback for older versions of Chrome and Safari
  if (isFn(/x/)) {
    isFn = function(value) {
      return typeof value === 'function' &&
        Object.prototype.toString.call(value) === '[object Function]';
    };
  }
  return isFn;
}());

/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */
function Disposable (action) {
  this.isDisposed = false;
  this.action = isFunction(action) ? action : noop;
}

/** Performs the task of cleaning up resources. */
Disposable.prototype.dispose = function () {
  if (!this.isDisposed) {
    this.action();
    this.isDisposed = true;
  }
};

/**
 * Creates a disposable object that invokes the specified action when disposed.
 * @param {Function} dispose Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 * @return {Disposable} The disposable object that runs the given action upon disposal.
 */
Disposable.create = function (action) { return new Disposable(action); };

/**
 * Gets the disposable that does nothing when disposed.
 */
Disposable.empty = { dispose: noop };

/**
 * Validates whether the given object is a disposable
 * @param {Object} Object to test whether it has a dispose method
 * @returns {Boolean} true if a disposable object, else false.
 */
Disposable.isDisposable = function (d) {
  return d && isFunction(d.dispose);
};

Disposable._fixup = function (result) {
  return Disposable.isDisposable(result) ? result : Disposable.empty;
};

module.exports = Disposable;
