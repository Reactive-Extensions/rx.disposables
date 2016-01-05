# `SingleAssignmentDisposable` class #

Represents a disposable resource which only allows a single assignment of its underlying disposable resource. If an underlying disposable resource has already been set, future attempts to set the underlying disposable resource will throw an Error.

## Usage ##

The follow example shows the basic usage of a `SingleAssignmentDisposable`.

```js
const singleDisposable = new SingleAssignmentDisposable();

const disposable = Disposable.create(() => console.log('disposed'));

singleDisposable.setDisposable(disposable);

singleDisposable.dispose();
// => disposed
```

## `SingleAssignmentDisposable Constructor` ##
- [`constructor`](#singleassignmentdisposable)

## `SingleAssignmentDisposable Instance Methods` ##
- [`dispose`](#singleassignmentdisposableprototypedispose)
- [`getDisposable`](#singleassignmentdisposableprototypegetdisposable)
- [`setDisposable`](#singleassignmentdisposableprototypesetdisposable)

## `SingleAssignmentDisposable Instance Properties` ##
- [`isDisposed`](#isdisposed)

## _SingleAssignmentDisposable Constructor_ ##

### <a id="singleassignmentdisposable"></a>`SingleAssignmentDisposable()`

Initializes a new instance of the `SingleAssignmentDisposable` class.

#### Example
```js
const singleDisposable = new SingleAssignmentDisposable();

console.log(singleDisposable.isDisposed);
// => false
```

* * *

## _SingleAssignmentDisposable Instance Methods_ ##

### <a id="singleassignmentdisposableprototypedispose"></a>`SingleAssignmentDisposable.prototype.dispose()`

Disposes the underlying disposable.

#### Example

```js
const singleDisposable = new SingleAssignmentDisposable();

const disposable = Disposable.create(() => console.log('disposed'));

singleDisposable.setDisposable(disposable);

console.log(singleDisposable.isDisposed);
// => false

singleDisposable.dispose();
// => disposed

console.log(singleDisposable.isDisposed);
// => true
```

* * *

### <a id="singleassignmentdisposableprototypegetdisposable"></a>`SingleAssignmentDisposable.prototype.getDisposable()`

Gets the underlying disposable. After disposal, the result of getting this method is undefined.

#### Returns
`Disposable` - The underlying disposable.

#### Example

```js
const singleDisposable = new SingleAssignmentDisposable();

const disposable = Disposable.create(() => console.log('disposed'));

singleDisposable.setDisposable(disposable);

console.log(singleDisposable.getDisposable() === disposable);
```

* * *

### <a id="singleassignmentdisposableprototypesetdisposablevalue"></a>`SingleAssignmentDisposable.prototype.setDisposable(value)`

Sets the underlying disposable.

#### Arguments
1. `value`: `Disposable`: The new underlying disposable.

#### Example

```js
const singleDisposable = new SingleAssignmentDisposable();

const d1 = Disposable.create(() => console.log('one'));

singleDisposable.setDisposable(d1);

const d2 = Disposable.create(() => console.log('two'));

try {
  singleDisposable.setDisposable(d2);
} catch (e) {
  console.log(e.message);
}

// => Disposable has already been assigned
```

* * *

## _SingleAssignmentDisposable Instance Properties_ ##

### <a id="isdisposed"></a>`isDisposed`

Gets a value that indicates whether the object is disposed.

#### Example
```js
const singleDisposable = new SingleAssignmentDisposable();

const disposable = Disposable.create(() => console.log('disposed'));

singleDisposable.setDisposable(disposable);

console.log(singleDisposable.isDisposed);
// => false

singleDisposable.dispose();
// => disposed

console.log(singleDisposable.isDisposed);
// => true
```

* * *
