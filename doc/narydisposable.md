# `NAryDisposable` class #

Represents an immutable group of disposable resources that are disposed together.

## Usage ##

The follow example shows the basic usage of a `NAryDisposable`.

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));
const d3 = Disposable.create(() => console.log('three'));

// Initialize with two disposables
const disposables = new NAryDisposable([d1, d2, d3]);

disposables.dispose();
// => one
// => two
// => three
```

## `NAryDisposable Constructor` ##
- [`constructor`](#narydisposabledisposables)

## `NAryDisposable Instance Methods` ##
- [`dispose`](#narydisposableprototypedispose)

## `NAryDisposable Instance Properties` ##
- [`isDisposed`](#isdisposed)

## _NAryDisposable Constructor_ ##

### <a id="narydisposable"></a>`NAryDisposable(disposables)`

Creates a new group of disposable resources that are disposed together.

#### Arguments
1. `disposables`: `Array` - Disposables that will be disposed together.

#### Example
```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));
const d3 = Disposable.create(() => console.log('three'));

// Initialize with two disposables
const disposables = new NAryDisposable([d1, d2, d3]);

disposables.dispose();
// => one
// => two
// => three
```

* * *

## _NAryDisposable Instance Methods_ ##

### <a id="narydisposableprototypedispose"></a>`NAryDisposable.prototype.dispose()`

Disposes the underlying disposables.

#### Example

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));
const d3 = Disposable.create(() => console.log('three'));

// Initialize with two disposables
const disposables = new NAryDisposable([d1, d2, d3]);

disposables.dispose();
// => one
// => two
// => three
```
* * *

## _NAryDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`

Gets a value that indicates whether the object is disposed.

#### Example
```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));
const d3 = Disposable.create(() => console.log('three'));

const disposables = new NAryDisposable([d1, d2, d3]);

console.log(disposables.isDisposed);
// => false

disposables.dispose();
// => disposed

console.log(disposables.isDisposed);
// => true
```

* * *
