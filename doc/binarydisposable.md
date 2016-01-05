# `BinaryDisposable` class #

Represents an immutable group of two disposable resources that are disposed together.

## Usage ##

The follow example shows the basic usage of a `BinaryDisposable`.

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

// Initialize with two disposables
const disposables = new BinaryDisposable(d1, d2);

disposables.dispose();
// => one
// => two
```

## `BinaryDisposable Constructor` ##
- [`constructor`](#binarydisposablefirst-second)

## `BinaryDisposable Instance Methods` ##
- [`dispose`](#binarydisposableprototypedispose)

## `BinaryDisposable Instance Properties` ##
- [`isDisposed`](#isdisposed)

## _BinaryDisposable Constructor_ ##

### <a id="binarydisposablefirst-second"></a>`BinaryDisposable(first, second)`

Creates a new group of two disposable resources that are disposed together.

#### Arguments
1. `first`: `Disposable` - The first disposable resource to add to the group.
2. `second`: `Disposable` - The second disposable resource to add to the group.

#### Example
```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

// Initialize with two disposables
const disposables = new BinaryDisposable(d1, d2);

disposables.dispose();
// => one
// => two
```

* * *

## _BinaryDisposable Instance Methods_ ##

### <a id="binarydisposableprototypedispose"></a>`BinaryDisposable.prototype.dispose()`

Disposes the underlying disposables.

#### Example

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

const disposables = new BinaryDisposable(d1, d2);

disposables.dispose();
// => one
// => two

console.log(disposables.length);
// => 0
```
* * *

## _BinaryDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`

Gets a value that indicates whether the object is disposed.

#### Example
```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

const disposables = new BinaryDisposable(d1, d2);

console.log(disposables.isDisposed);
// => false

disposables.dispose();
// => disposed

console.log(disposables.isDisposed);
// => true
```

* * *
