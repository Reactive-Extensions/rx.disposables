# `CompositeDisposable` class #

Represents a group of disposable resources that are disposed together.

## Usage ##

The follow example shows the basic usage of an `CompositeDisposable`.

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

// Initialize with two disposables
const disposables = new CompositeDisposable(d1, d2);

disposables.dispose();
// => one
// => two
```

### Location

- js

## `CompositeDisposable Constructor` ##
- [`constructor`](#compositedisposablergs)

## `CompositeDisposable Instance Methods` ##
- [`add`](#compositedisposableprototypeadditem)
- [`clear`](#compositedisposableprototypeclear)
- [`dispose`](#compositedisposableprototypedispose)
- [`remove`](#compositedisposableprototyperemoveitem)

## `CompositeDisposable Instance Properties` ##
- [`isDisposed`](#isdisposed)
- [`length`](#length)

## _CompositeDisposable Constructor_ ##

### <a id="compositedisposableargs"></a>`CompositeDisposable(...args)`

Initializes a new instance of the `CompositeDisposable` class from a group of disposables.

#### Arguments
1. `args` `Array|arguments`: Disposables that will be disposed together.

#### Example
```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

// Initialize with two disposables
const disposables = new CompositeDisposable(d1, d2);

disposables.dispose();
// => one
// => two
```

* * *

## _CompositeDisposable Instance Methods_ ##

### <a id="compositedisposableprototypeadditem"></a>`CompositeDisposable.prototype.add(item)`

Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.

#### Arguments
1. `item` `Disposable`: Disposable to add.

#### Example

```js
const disposables = new CompositeDisposable();

const d1 = Disposable.create(() => console.log('one'));

disposables.add(d1);

disposables.dispose();
// => one
```

* * *

### <a id="compositedisposableprototypeclear"></a>`CompositeDisposable.prototype.clear()`

Disposes all disposables in the group and removes them from the group but does not dispose the CompositeDisposable.

#### Example

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

const disposables = new CompositeDisposable(d1, d2);

disposables.dispose();
// => one
// => two

console.log(disposables.isDisposed);
// => false
```

* * *

### <a id="compositedisposableprototypedispose"></a>`CompositeDisposable.prototype.dispose()`

Disposes all disposables in the group and removes them from the group.

#### Example

```js
const d1 = Disposable.create(() => console.log('one'));
const d2 = Disposable.create(() => console.log('two'));

const disposables = new CompositeDisposable(d1, d2);

disposables.dispose();
// => one
// => two

console.log(disposables.length);
// => 0
```

* * *

### <a id="compositedisposableprototyperemoveitem"></a>`CompositeDisposable.prototype.remove(item)`

Removes and disposes the first occurrence of a disposable from the CompositeDisposable.

#### Arguments
1. `item` `Disposable`: Disposable to remove.

#### Returns
`Boolean`: `true` if the disposable was found and disposed; otherwise, `false`.

#### Example

```js
var disposables = new CompositeDisposable();

var d1 = Disposable.create(function () {
     console.log('one');
});

disposables.add(d1);

console.log(disposables.remove(d1));
// => true
```

* * *

## _CompositeDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`
<a href="#isdisposed">#</a>

Gets a value that indicates whether the object is disposed.

#### Example
```js
var disposables = new CompositeDisposable();

var d1 = Disposable.create(function () {
     console.log('disposed');
});

disposables.add(d1);

console.log(disposables.isDisposed);
// => false

disposables.dispose();
// => disposed

console.log(disposables.isDisposed);
// => true
```

* * *

### <a id="length"></a>`length`
<a href="#length">#</a>

Gets the number of disposables in the CompositeDisposable.

#### Example
```js
var disposables = new CompositeDisposable();

var d1 = Disposable.create(function () {
     console.log('disposed');
});

disposables.add(d1);

console.log(disposables.length);
// => 1

disposables.dispose();
// => disposed

console.log(disposables.length);
// => 0
```

* * *
