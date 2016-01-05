[![Build Status](https://travis-ci.org/Reactive-Extensions/rx.disposables.svg)](https://travis-ci.org/Reactive-Extensions/rx.disposables)
[![GitHub version](https://img.shields.io/github/tag/reactive-extensions/rx.disposables.svg)](https://github.com/Reactive-Extensions/rx.disposables)
[![NPM version](https://img.shields.io/npm/v/rx.disposables.svg)](https://www.npmjs.com/package/rx.disposables)
[![Downloads](https://img.shields.io/npm/dm/rx.disposables.svg)](https://www.npmjs.com/package/rx.disposables)# `rx.disposables` - RxJS disposables

This is a standalone version of the RxJS disposable classes which can manage the lifetime of any given resource.

This includes the following disposables with their documentation:
- [`BinaryDisposable`](doc/binarydisposable);
- [`CompositeDisposable`](doc/compositedisposable.md)
- [`Disposable`](doc/disposable.md)
- [`NAryDisposable`](doc/narydisposable.md)
- [`SerialDisposable`](doc/serialdisposable.md)
- [`SingleAssignmentDisposable`](doc/singleassignmentdisposable)

## Installation

The `rx.disposables` library can be installed by the following:

### NPM
```bash
$ npm install rx.disposables
```

## Usage

Here is some basic usage a simple `Disposable` to handle resources:
```js
const Disposable = require('rx.disposables').Disposable;

// Imagine this to be some sort of resource
let isDisposed = false;
const d = Disposable.create(() => isDisposed = true);

d.dispose();
console.log(`isDisposed is ${isDisposed}`);
// => isDisposed is true
```

There may be some instances when you want the disposable to be ref counted so that it only disposes when all dependent observables have been disposed, for example a file handle.

```js
const d = require('rx.disposables');

// Imagine this to be a resource
let isDisposed = false;
const dd = d.Disposable.create(() => isDisposed = true);

const r = new d.RefCountDisposable(dd);

// Make two references
const d1 = r.getDisposable();
const d2 = r.getDisposable();

// Clean up each
d1.dispose();
d2.dispose();

// Now we can clean up now that ref count went to zero
r.dispose();
console.log(`isDisposed is ${isDisposed}`);
// => isDisposed is true
```

We can also handle collections in multiple ways, either with the immutable disposables such as the `BinaryDisposable` for handling two disposables, and `NAryDisposable` for handling arrays.  If you wish to add and remove disposables from a list, you can use the `CompositeDisposable`.

```js
const d = require('rx.disposables');

const d1 = d.Disposable.create(() => console.log('one'));
const d2 = d.Disposable.create(() => console.log('two'));

const c = new d.CompositeDisposable(d1, d2);

const d3 = d.Disposable.create(() => console.log('three'));
c.add(d3);

c.remove(d3);
// => three

c.dispose();
// => one
// => two
```

There may also be times when you need to set the disposable later, so you can manage it in a container such as the `SingleAssignmentDisposable` for handling only one assignment, and the `SerialDisposable` which disposes the previous and sets the new disposable if the `SerialDisposable` has not been disposed.

For example, we could set it later using the `SingleAssignmentDisposable`:

```js
const d = require('rx.disposables');

const sad = new d.SingleAssignmentDisposable();

const d1 = d.Disposable.create(() => console.log('one'));

// Set the disposable later
sad.setDisposable(d1);

sad.dispose();
// => one
```

And we could also use the `SerialDisposable` if we have the need to swap out our disposable:

```js
const d = require('rx.disposables');

const sd = new d.SerialDisposable();

const d1 = d.Disposable.create(() => console.log('one'));

// Set the disposable later
sd.setDisposable(d1);

const d2 = d.Disposable.create(() => console.log('two'));

// Replace the disposable
sd.setDisposable(d2);
// => one

sd.dispose();
// => two
```

## Contributing

# LICENSE

The MIT License (MIT)

Copyright (c) 2016 Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
