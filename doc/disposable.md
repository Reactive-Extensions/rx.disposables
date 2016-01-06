# `Disposable` class #

Provides a set of static methods for creating Disposables, which defines a method to release allocated resources.

## Usage ##

The follow example shows the basic usage of an `Disposable`.

```js
const disposable = Disposable.create(() => console.log('disposed'));

disposable.dispose();
// => disposed
```

## `Disposable` Class Methods ##
- [`create`](#disposablecreateaction)
- [`isDisposable`](#disposableisdisposabled)

## `Disposable` Class Properties ##
- [`empty`](#disposableempty)

## `Disposable` Instance Methods ##
- [`dispose`](#disposableprototypedispose)

## _Class Methods_ ##

### <a id="disposablecreateaction"></a>`Disposable.create(action)`

Creates a disposable object that invokes the specified action when disposed.

#### Arguments
1. `action` `Function`: Function to run during the first call to `dispose`. The action is guaranteed to be run at most once.

#### Returns
`Disposable`: The disposable object that runs the given action upon disposal.

#### Example
```js
const disposable = Disposable.create(() => console.log('disposed'));

disposable.dispose();
// => disposed
```

* * *

### <a id="disposableisdisposabled"></a>`Disposable.isDisposable(d)`

Creates a disposable object that invokes the specified action when disposed.

#### Arguments
1. `d`: `Object` - Object to validate whether it has a dispose method.

#### Returns
`Boolean` - `true` if is a disposable object, else `false`.

#### Example
```js
const disposable = Disposable.empty;
console.log(Disposable.isDisposable(disposable));
// => true
```

* * *

## _Disposable Class Properties_ ##

### <a id="disposableempty"></a>`Disposable.empty`

Gets the disposable that does nothing when disposed.

#### Returns
`Disposable`: The disposable that does nothing when disposed.

#### Example

```js
const disposable = Disposable.empty;

disposable.dispose(); // Does nothing
```

* * *

## _Disposable Instance Methods_ ##

### <a id="disposableprototypedispose"></a>`Disposable.prototype.dispose()`

Performs the task of cleaning up resources.

#### Example

```js
const disposable = Disposable.create(() => console.log('disposed'));

disposable.dispose();
// => disposed
```
* * *
