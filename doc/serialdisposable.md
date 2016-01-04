# `SerialDisposable` class #

Represents a disposable resource whose underlying disposable resource can be replaced by another disposable resource, causing automatic disposal of the previous underlying disposable resource.

## Usage ##

The follow example shows the basic usage of an SerialDisposable.

```js
const serialDisposable = new SerialDisposable();

const d1 = Disposable.create(() => console.log('one'));

serialDisposable.setDisposable(d1);

const d2 = Disposable.create(() => console.log('two'));

serialDisposable.setDisposable(d2);
// => one

serialDisposable.dispose();
// = two
```

## `SerialDisposable Constructor` ##
- [`constructor`](#serialdisposable)

## `SerialDisposable Instance Methods` ##
- [`dispose`](#serialdisposableprototypedispose)
- [`getDisposable`](#serialdisposableprototypegetdisposable)
- [`setDisposable`](#serialdisposableprototypesetdisposable)

## `SerialDisposable Instance Properties` ##
- [`isDisposed`](#isdisposed)

## _SerialDisposable Constructor_ ##

### <a id="serialdisposable"></a>`SerialDisposable()`

Initializes a new instance of the `SerialDisposable` class.

#### Example
```js
const serialDisposable = new SerialDisposable();

console.log(serialDisposable.isDisposed);
// => false
```

* * *

## _SerialDisposable Instance Methods_ ##

### <a id="serialdisposableprototypedispose"></a>`SerialDisposable.prototype.dispose()`

Disposes the underlying disposable as well as all future replacements.

#### Example

```js
const serialDisposable = new SerialDisposable();

const d1 = Disposable.create(() => console.log('one'));

serialDisposable.setDisposable(d1);

serialDisposable.dispose();
// => one
```

* * *

### <a id="serialdisposableprototypegetdisposable"></a>`SerialDisposable.prototype.getDisposable()`

Gets the underlying disposable.

#### Returns
`Disposable` - The underlying disposable.

#### Example

```js
const serialDisposable = new SerialDisposable();

const d1 = Disposable.create(() => console.log('one'));

serialDisposable.setDisposable(d1);

console.log(serialDisposable.getDisposable() === d1);
// => true
```

* * *

### <a id="serialdisposableprototypesetdisposablevalue"></a>`SerialDisposable.prototype.setDisposable(value)`

Sets the underlying disposable.

#### Arguments
1. `value` `Disposable`: The new underlying disposable.

#### Example

```js
const serialDisposable = new SerialDisposable();

const d1 = Disposable.create(() => console.log('one'));

serialDisposable.setDisposable(d1);

serialDisposable.dispose();
// => one

const d2 = Disposable.create(() => console.log('two'));

serialDisposable.setDisposable(d2);
// => two
```

* * *

## _SerialDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`

Gets a value that indicates whether the object is disposed.

#### Example
```js
const serialDisposable = new SerialDisposable();

const d1 = Disposable.create(() => console.log('one'));

serialDisposable.setDisposable(d1);

console.log(serialDisposable.isDisposed);
// => false

serialDisposable.dispose();
// => one

console.log(serialDisposable.isDisposed);
// => true
```

* * *
