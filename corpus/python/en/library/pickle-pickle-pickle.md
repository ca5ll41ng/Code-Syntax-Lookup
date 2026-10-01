---
id: "python-en-function-pickle-pickle"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B403"],"cwe":["CWE-502"],"note":"Consider possible security implications associated with {name} module."}
name: "pickle"
title: "Persistence of External Objects"
directive: "module"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#module-pickle"
license: "PSF"
updated: "2026-10-01"
---

# Persistence of External Objects

currentmodule:: pickle

.. _pickle-persistent:

**Persistence of External Objects**

For the benefit of object persistence, the `pickle` module supports the
notion of a reference to an object outside the pickled data stream.  Such
objects are referenced by a persistent ID, which should be either a string of
alphanumeric characters (for protocol 0) [#]_ or just an arbitrary object (for
any newer protocol).

The resolution of such persistent IDs is not defined by the `pickle`
module; it will delegate this resolution to the user-defined methods on the
pickler and unpickler, `~Pickler.persistent_id` and
`~Unpickler.persistent_load` respectively.

To pickle objects that have an external persistent ID, the pickler must have a
custom `~Pickler.persistent_id` method that takes an object as an
argument and returns either `None` or the persistent ID for that object.
When `None` is returned, the pickler simply pickles the object as normal.
When a persistent ID string is returned, the pickler will pickle that object,
along with a marker so that the unpickler will recognize it as a persistent ID.

To unpickle external objects, the unpickler must have a custom
`~Unpickler.persistent_load` method that takes a persistent ID object and
returns the referenced object.

Here is a comprehensive example presenting how persistent ID can be used to
pickle external objects by reference.

literalinclude:: ../includes/dbpickle.py

.. _pickle-dispatch:

**Dispatch Tables**

If one wants to customize pickling of some classes without disturbing
any other code which depends on pickling, then one can create a
pickler with a private dispatch table.

The global dispatch table managed by the `copyreg` module is
available as `copyreg.dispatch_table`.  Therefore, one may
choose to use a modified copy of `copyreg.dispatch_table` as a
private dispatch table.

For example ::

   f = io.BytesIO()
   p = pickle.Pickler(f)
   p.dispatch_table = copyreg.dispatch_table.copy()
   p.dispatch_table[SomeClass] = reduce_SomeClass

creates an instance of `pickle.Pickler` with a private dispatch
table which handles the `SomeClass` class specially.  Alternatively,
the code ::

   class MyPickler(pickle.Pickler):
       dispatch_table = copyreg.dispatch_table.copy()
       dispatch_table[SomeClass] = reduce_SomeClass
   f = io.BytesIO()
   p = MyPickler(f)

does the same but all instances of `MyPickler` will by default
share the private dispatch table.  On the other hand, the code ::

   copyreg.pickle(SomeClass, reduce_SomeClass)
   f = io.BytesIO()
   p = pickle.Pickler(f)

modifies the global dispatch table shared by all users of the `copyreg` module.

.. _pickle-state:

**Handling Stateful Objects**

Here's an example that shows how to modify pickling behavior for a class.
The `TextReader` class below opens a text file, and returns the line number and
line contents each time its `readline` method is called. If a
`TextReader` instance is pickled, all attributes *except* the file object
member are saved. When the instance is unpickled, the file is reopened, and
reading resumes from the last location. The `__setstate__` and
`__getstate__` methods are used to implement this behavior. ::

   class TextReader:
       """Print and number lines in a text file."""

       def __init__(self, filename):
           self.filename = filename
           self.file = open(filename)
           self.lineno = 0

       def readline(self):
           self.lineno += 1
           line = self.file.readline()
           if not line:
               return None
           if line.endswith('\n'):
               line = line[:-1]
           return "%i: %s" % (self.lineno, line)

       def __getstate__(self):
           # Copy the object's state from self.__dict__ which contains
           # all our instance attributes. Always use the dict.copy()
           # method to avoid modifying the original state.
           state = self.__dict__.copy()
           # Remove the unpicklable entries.
           del state['file']
           return state

       def __setstate__(self, state):
           # Restore instance attributes (i.e., filename and lineno).
           self.__dict__.update(state)
           # Restore the previously opened file's state. To do so, we need to
           # reopen it and read from it until the line count is restored.
           file = open(self.filename)
           for _ in range(self.lineno):
               file.readline()
           # Finally, save the file.
           self.file = file

A sample usage might be something like this::

   >>> reader = TextReader("hello.txt")
   >>> reader.readline()
   '1: Hello world!'
   >>> reader.readline()
   '2: I am line number two.'
   >>> new_reader = pickle.loads(pickle.dumps(reader))
   >>> new_reader.readline()
   '3: Goodbye!'

.. _reducer_override:

**Custom Reduction for Types, Functions, and Other Objects**

> *Added in 3.8*

Sometimes, `~Pickler.dispatch_table` may not be flexible enough.
In particular we may want to customize pickling based on another criterion
than the object's type, or we may want to customize the pickling of
functions and classes.

For those cases, it is possible to subclass from the `Pickler` class and
implement a `~Pickler.reducer_override` method. This method can return an
arbitrary reduction tuple (see `~object.__reduce__`). It can alternatively return
`NotImplemented` to fallback to the traditional behavior.

If both the `~Pickler.dispatch_table` and
`~Pickler.reducer_override` are defined, then
`~Pickler.reducer_override` method takes priority.

Note::

Here is a simple example where we allow pickling and reconstructing
a given class::

   import io
   import pickle

   class MyClass:
       my_attribute = 1

   class MyPickler(pickle.Pickler):
       def reducer_override(self, obj):
           """Custom reducer for MyClass."""
           if getattr(obj, "__name__", None) == "MyClass":
               return type, (obj.__name__, obj.__bases__,
                             {'my_attribute': obj.my_attribute})
           else:
               # For any other object, fallback to usual reduction
               return NotImplemented

   f = io.BytesIO()
   p = MyPickler(f)
   p.dump(MyClass)

   del MyClass

   unpickled_class = pickle.loads(f.getvalue())

   assert isinstance(unpickled_class, type)
   assert unpickled_class.__name__ == "MyClass"
   assert unpickled_class.my_attribute == 1

.. _pickle-oob:

**Out-of-band Buffers**

> *Added in 3.8*

In some contexts, the `pickle` module is used to transfer massive amounts
of data.  Therefore, it can be important to minimize the number of memory
copies, to preserve performance and resource consumption.  However, normal
operation of the `pickle` module, as it transforms a graph-like structure
of objects into a sequential stream of bytes, intrinsically involves copying
data to and from the pickle stream.

This constraint can be eschewed if both the *provider* (the implementation
of the object types to be transferred) and the *consumer* (the implementation
of the communications system) support the out-of-band transfer facilities
provided by pickle protocol 5 and higher.

**Provider API**

The large data objects to be pickled must implement a `~object.__reduce_ex__`
method specialized for protocol 5 and higher, which returns a
`PickleBuffer` instance (instead of e.g. a `bytes` object)
for any large data.

A `PickleBuffer` object *signals* that the underlying buffer is
eligible for out-of-band data transfer.  Those objects remain compatible
with normal usage of the `pickle` module.  However, consumers can also
opt-in to tell `pickle` that they will handle those buffers by
themselves.

**Consumer API**

A communications system can enable custom handling of the `PickleBuffer`
objects generated when serializing an object graph.

On the sending side, it needs to pass a *buffer_callback* argument to
`Pickler` (or to the `dump` or `dumps` function), which
will be called with each `PickleBuffer` generated while pickling
the object graph.  Buffers accumulated by the *buffer_callback* will not
see their data copied into the pickle stream, only a cheap marker will be
inserted.

On the receiving side, it needs to pass a *buffers* argument to
`Unpickler` (or to the `load` or `loads` function),
which is an iterable of the buffers which were passed to *buffer_callback*.
That iterable should produce buffers in the same order as they were passed
to *buffer_callback*.  Those buffers will provide the data expected by the
reconstructors of the objects whose pickling produced the original
`PickleBuffer` objects.

Between the sending side and the receiving side, the communications system
is free to implement its own transfer mechanism for out-of-band buffers.
Potential optimizations include the use of shared memory or datatype-dependent
compression.

**Example**

Here is a trivial example where we implement a `bytearray` subclass
able to participate in out-of-band buffer pickling::

   class ZeroCopyByteArray(bytearray):

       def __reduce_ex__(self, protocol):
           if protocol >= 5:
               return type(self)._reconstruct, (PickleBuffer(self),), None
           else:
               # PickleBuffer is forbidden with pickle protocols <= 4.
               return type(self)._reconstruct, (bytearray(self),)

       @classmethod
       def _reconstruct(cls, obj):
           with memoryview(obj) as m:
               # Get a handle over the original buffer object
               obj = m.obj
               if type(obj) is cls:
                   # Original buffer object is a ZeroCopyByteArray, return it
                   # as-is.
                   return obj
               else:
                   return cls(obj)

The reconstructor (the `_reconstruct` class method) returns the buffer's
providing object if it has the right type.  This is an easy way to simulate
zero-copy behaviour on this toy example.

On the consumer side, we can pickle those objects the usual way, which
when unserialized will give us a copy of the original object::

   b = ZeroCopyByteArray(b"abc")
   data = pickle.dumps(b, protocol=5)
   new_b = pickle.loads(data)
   print(b == new_b)  # True
   print(b is new_b)  # False: a copy was made

But if we pass a *buffer_callback* and then give back the accumulated
buffers when unserializing, we are able to get back the original object::

   b = ZeroCopyByteArray(b"abc")
   buffers = []
   data = pickle.dumps(b, protocol=5, buffer_callback=buffers.append)
   new_b = pickle.loads(data, buffers=buffers)
   print(b == new_b)  # True
   print(b is new_b)  # True: no copy was made

This example is limited by the fact that `bytearray` allocates its
own memory: you cannot create a `bytearray` instance that is backed
by another object's memory.  However, third-party datatypes such as NumPy
arrays do not have this limitation, and allow use of zero-copy pickling
(or making as few copies as possible) when transferring between distinct
processes or systems.

> **Seealso**
>
>

.. _pickle-restrict:

**Restricting Globals**

By default, unpickling will import any class or function that it finds in the
pickle data.  For many applications, this behaviour is unacceptable as it
permits the unpickler to import and invoke arbitrary code.  Just consider what
this hand-crafted pickle data stream does when loaded::

    >>> import pickle
    >>> pickle.loads(b"cos\nsystem\n(S'echo hello world'\ntR.")
    hello world
    0

In this example, the unpickler imports the `os.system` function and then
apply the string argument "echo hello world".  Although this example is
inoffensive, it is not difficult to imagine one that could damage your system.

For this reason, you may want to control what gets unpickled by customizing
`Unpickler.find_class`.  Unlike its name suggests,
`Unpickler.find_class` is called whenever a global (i.e., a class or
a function) is requested.  Thus it is possible to either completely forbid
globals or restrict them to a safe subset.

Here is an example of an unpickler allowing only few safe classes from the
`builtins` module to be loaded::

   import builtins
   import io
   import pickle

   safe_builtins = {
       'range',
       'complex',
       'set',
       'frozenset',
       'slice',
   }

   class RestrictedUnpickler(pickle.Unpickler):

       def find_class(self, module, name):
           # Only allow safe classes from builtins.
           if module == "builtins" and name in safe_builtins:
               return getattr(builtins, name)
           # Forbid everything else.
           raise pickle.UnpicklingError("global '%s.%s' is forbidden" %
                                        (module, name))

   def restricted_loads(s):
       """Helper function analogous to pickle.loads()."""
       return RestrictedUnpickler(io.BytesIO(s)).load()

A sample usage of our unpickler working as intended::

    >>> restricted_loads(pickle.dumps([1, 2, range(15)]))
    [1, 2, range(0, 15)]
    >>> restricted_loads(b"cos\nsystem\n(S'echo hello world'\ntR.")
    Traceback (most recent call last):
      ...
    pickle.UnpicklingError: global 'os.system' is forbidden
    >>> restricted_loads(b'cbuiltins\neval\n'
    ...                  b'(S\'getattr(__import__("os"), "system")'
    ...                  b'("echo hello world")\'\ntR.')
    Traceback (most recent call last):
      ...
    pickle.UnpicklingError: global 'builtins.eval' is forbidden

.. XXX Add note about how extension codes could evade our protection
   mechanism (e.g. cached classes do not invokes find_class()).

As our examples shows, you have to be careful with what you allow to be
unpickled.  Therefore if security is a concern, you may want to consider
alternatives such as the marshalling API in `xmlrpc.client` or
third-party solutions.

**Performance**

Recent versions of the pickle protocol (from protocol 2 and upwards) feature
efficient binary encodings for several common features and built-in types.
Also, the `pickle` module has a transparent optimizer written in C.

.. _pickle-example:

**Examples**

For the simplest code, use the `dump` and `load` functions. ::

   import pickle

   # An arbitrary collection of objects supported by pickle.
   data = {
       'a': [1, 2.0, 3+4j],
       'b': ("character string", b"byte string"),
       'c': {None, True, False}
   }

   with open('data.pickle', 'wb') as f:
       # Pickle the 'data' dictionary using the highest protocol available.
       pickle.dump(data, f, pickle.HIGHEST_PROTOCOL)

The following example reads the resulting pickled data. ::

   import pickle

   with open('data.pickle', 'rb') as f:
       # The protocol version used is detected automatically, so we do not
       # have to specify it.
       data = pickle.load(f)

.. XXX: Add examples showing how to optimize pickles for size (like using
.. pickletools.optimize() or the gzip module).

.. _pickle-cli:

**Command-line interface**

The `pickle` module can be invoked as a script from the command line,
it will display contents of the pickle files. However, when the pickle file
that you want to examine comes from an untrusted source, `-m pickletools`
is a safer option because it does not execute pickle bytecode, see
`pickletools CLI usage`.

```bash

python -m pickle pickle_file [pickle_file ...]
```

The following option is accepted:

program:: pickle

option:: pickle_file

> **Seealso**
>
> Module `copyreg`
>    Pickle interface constructor registration for extension types.
>
> Module `pickletools`
>    Tools for working with and analyzing pickled data.
>
> Module `shelve`
>    Indexed databases of objects; uses `pickle`.
>
> Module `copy`
>    Shallow and deep object copying.
>
> Module `marshal`
>    High-performance serialization of built-in types.
>

#### Footnotes

.. [#] Don't confuse this with the `marshal` module

.. [#] This is why `lambda` functions cannot be pickled:  all
    `lambda` functions share the same name:  `<lambda>`.

.. [#] The exception raised will likely be an `ImportError` or an
   `AttributeError` but it could be something else.

.. [#] The `copy` module uses this protocol for shallow and deep copying
   operations.

.. [#] The limitation on alphanumeric characters is due to the fact
   that persistent IDs in protocol 0 are delimited by the newline
   character.  Therefore if any kind of newline characters occurs in
   persistent IDs, the resulting pickled data will become unreadable.
