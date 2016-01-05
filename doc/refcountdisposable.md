# `RefCountDisposable` class #

Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.

## Usage ##

The follow example shows the basic usage of a `RefCountDisposable`.

```js
const d = Disposable.create(() => console.log('disposed'));

const r = new RefCountDisposable(d);

const d1 = r.getDisposable();
const d2 = r.getDisposable();

d1.dispose();
console.log(d.isDisposed);
// => false

d2.dispose();
console.log(d.isDisposed);
// => false

r.dispose();
// => disposed
console.log(d.isDisposed);
// => true
```

## `RefCountDisposable` Constructor ##
- [`constructor`](#refcountdisposabledisposable)

## `RefCountDisposable` Instance Methods ##
- [`dispose`](#refcountdisposableprototypedispose)
- [`getDisposable`](#refcountdisposableprototypegetdisposable)
- [`setDisposable`](#refcountdisposableprototypesetdisposable)

## `RefCountDisposable` Instance Properties ##
- [`isDisposed`](#isdisposed)

## _RefCountDisposable Constructor_ ##

### <a id="refcountdisposabledisposable"></a>`RefCountDisposable(disposable)`

Initializes a new instance of the `RefCountDisposable` class with the specified disposable.

#### Example
```js
const d = Disposable.create(() => console.log('disposed'));

const r = new RefCountDisposable(d);

r.dispose();
// => disposed
```

* * *

## _RefCountDisposable Instance Methods_ ##

### <a id="refcountdisposableprototypedispose"></a>`RefCountDisposable.prototype.dispose()`

Disposes the underlying disposable only when all dependent disposables have been disposed.

#### Example

```js
const d = Disposable.create(() => console.log('disposed'));

const r = new RefCountDisposable(d);

const d1 = r.getDisposable();
const d2 = r.getDisposable();

d1.dispose();
console.log(d.isDisposed);
// => false

d2.dispose();
console.log(d.isDisposed);
// => false

// All have been disposed
r.dispose();
// => disposed
console.log(d.isDisposed);
// => true
```

* * *

### <a id="refcountdisposableprototypegetdisposable"></a>`RefCountDisposable.prototype.getDisposable()`

Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.

#### Returns
`Disposable` - A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.

#### Example

```js
const d = Disposable.create(() => console.log('disposed'));

const r = new RefCountDisposable(d);

// Ref count by two
const d1 = r.getDisposable();
const d2 = r.getDisposable();

// Dispose both
d1.dispose();
d2.dispose();

r.dispose();
// => disposed
console.log(d.isDisposed);
// => true
```

* * *

## _RefCountDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`

Gets a value that indicates whether the object is disposed.

#### Example
```js
const d = Disposable.create(() => console.log('disposed'));

var r = new RefCountDisposable(d);

console.log(d.isDisposed);
// => false

r.dispose();
// => disposed

console.log(r.isDisposed);
// => true
```

* * *
