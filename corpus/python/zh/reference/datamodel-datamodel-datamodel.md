---
id: "python-zh-syntax-datamodel-datamodel"
language: "python"
lang: "zh"
category: "syntax"
name: "datamodel"
title: "**********"
module: "datamodel"
source_url: "https://docs.python.org/zh-cn/3/reference/datamodel.html"
license: "PSF"
updated: "2026-10-01"
---

# **********

.. _datamodel:

**********
Data model
**********

.. _objects:

**Objects, values and types**

`Objects` are Python's abstraction for data.  All data in a Python program
is represented by objects or by relations between objects. Even code is
represented by objects.

Every object has an identity, a type and a value.  An object's *identity* never
changes once it has been created; you may think of it as the object's address in
memory.  The `is` operator compares the identity of two objects; the
`id` function returns an integer representing its identity.

impl-detail::

An object's type determines the operations that the object supports (e.g., "does
it have a length?") and also defines the possible values for objects of that
type.  The `type` function returns an object's type (which is an object
itself).  Like its identity, an object's `type` is also unchangeable.
[#]_

The *value* of some objects can change.  Objects whose value can
change are said to be *mutable*; objects whose value is unchangeable once they
are created are called *immutable*. (The value of an immutable container object
that contains a reference to a mutable object can change when the latter's value
is changed; however the container is still considered immutable, because the
collection of objects it contains cannot be changed.  So, immutability is not
strictly the same as having an unchangeable value, it is more subtle.) An
object's mutability is determined by its type; for instance, numbers, strings
and tuples are immutable, while dictionaries and lists are mutable.

Objects are never explicitly destroyed; however, when they become unreachable
they may be garbage-collected.  An implementation is allowed to postpone garbage
collection or omit it altogether --- it is a matter of implementation quality
how garbage collection is implemented, as long as no objects are collected that
are still reachable.

impl-detail::

Note that the use of the implementation's tracing or debugging facilities may
keep objects alive that would normally be collectable. Also note that catching
an exception with a `try`...\ `except` statement may keep
objects alive.

Some objects contain references to "external" resources such as open files or
windows.  It is understood that these resources are freed when the object is
garbage-collected, but since garbage collection is not guaranteed to happen,
such objects also provide an explicit way to release the external resource,
usually a `close` method. Programs are strongly recommended to explicitly
close such objects.  The `try`...\ `finally` statement
and the `with` statement provide convenient ways to do this.

Some objects contain references to other objects; these are called *containers*.
Examples of containers are tuples, lists and dictionaries.  The references are
part of a container's value.  In most cases, when we talk about the value of a
container, we imply the values, not the identities of the contained objects;
however, when we talk about the mutability of a container, only the identities
of the immediately contained objects are implied.  So, if an immutable container
(like a tuple) contains a reference to a mutable object, its value changes if
that mutable object is changed.

Types affect almost all aspects of object behavior.  Even the importance of
object identity is affected in some sense: for immutable types, operations that
compute new values may actually return a reference to any existing object with
the same type and value, while for mutable objects this is not allowed.
For example, after `a = 1; b = 1`, *a* and *b* may or may not refer to
the same object with the value one, depending on the implementation.
This is because `int` is an immutable type, so the reference to `1`
can be reused. This behaviour depends on the implementation used, so should
not be relied upon, but is something to be aware of when making use of object
identity tests.
However, after `c = []; d = []`, *c* and *d* are guaranteed to refer to two
different, unique, newly created empty lists. (Note that `e = f = []` assigns
the *same* object to both *e* and *f*.)

.. _types:

**The standard type hierarchy**

Below is a list of the types that are built into Python.  Extension modules
(written in C, Java, or other languages, depending on the implementation) can
define additional types.  Future versions of Python may add types to the type
hierarchy (e.g., rational numbers, efficiently stored arrays of integers, etc.),
although such additions will often be provided via the standard library instead.

Some of the type descriptions below contain a paragraph listing 'special
attributes.'  These are attributes that provide access to the implementation and
are not intended for general use.  Their definition may change in the future.

**None**

This type has a single value.  There is a single object with this value. This
object is accessed through the built-in name `None`. It is used to signify the
absence of a value in many situations, e.g., it is returned from functions that
don't explicitly return anything. Its truth value is false.

**NotImplemented**

This type has a single value.  There is a single object with this value. This
object is accessed through the built-in name `NotImplemented`. Numeric methods
and rich comparison methods should return this value if they do not implement the
operation for the operands provided.  (The interpreter will then try the
reflected operation, or some other fallback, depending on the operator.)  It
should not be evaluated in a boolean context.

See
`implementing-the-arithmetic-operations`
for more details.

> *Changed in 3.9*: Evaluating :data:`NotImplemented` in a boolean context was deprecated.

> *Changed in 3.14*: Evaluating :data:`NotImplemented` in a boolean context now raises a :exc:`TypeError`. It previously evaluated to :const:`True` and emitted a :exc:`DeprecationWarning` since Python 3.9.

**Ellipsis**

This type has a single value.  There is a single object with this value. This
object is accessed through the literal `...` or the built-in name
`Ellipsis`.  Its truth value is true.

**`numbers.Number`**

These are created by numeric literals and returned as results by arithmetic
operators and arithmetic built-in functions.  Numeric objects are immutable;
once created their value never changes.  Python numbers are of course strongly
related to mathematical numbers, but subject to the limitations of numerical
representation in computers.

The string representations of the numeric classes, computed by
`~object.__repr__` and `~object.__str__`, have the following
properties:

* They are valid numeric literals which, when passed to their
  class constructor, produce an object having the value of the
  original numeric.

* The representation is in base 10, when possible.

* Leading zeros, possibly excepting a single zero before a
  decimal point, are not shown.

* Trailing zeros, possibly excepting a single zero after a
  decimal point, are not shown.

* A sign is shown only when the number is negative.

Python distinguishes between integers, floating-point numbers, and complex
numbers:

**`numbers.Integral`**

These represent elements from the mathematical set of integers (positive and
negative).

> **Note**
>
> The rules for integer representation are intended to give the most meaningful
> interpretation of shift and mask operations involving negative integers.
>

整型数可细分为两种类型:

Integers (`int`)
   These represent numbers in an unlimited range, subject to available (virtual)
   memory only.  For the purpose of shift and mask operations, a binary
   representation is assumed, and negative numbers are represented in a variant of
   2's complement which gives the illusion of an infinite string of sign bits
   extending to the left.

布尔型 (:class:`bool`)

   These represent the truth values False and True.  The two objects representing
   the values `False` and `True` are the only Boolean objects. The Boolean type is a
   subtype of the integer type, and Boolean values behave like the values 0 and 1,
   respectively, in almost all contexts, the exception being that when converted to
   a string, the strings `"False"` or `"True"` are returned, respectively.

.. _datamodel-float:

**`numbers.Real` (`float`)**

These represent machine-level double precision floating-point numbers. You are
at the mercy of the underlying machine architecture (and C or Java
implementation) for the accepted range and handling of overflow. Python does not
support single-precision floating-point numbers; the savings in processor and
memory usage that are usually the reason for using these are dwarfed by the
overhead of using objects in Python, so there is no reason to complicate the
language with two kinds of floating-point numbers.

**`numbers.Complex` (`complex`)**

These represent complex numbers as a pair of machine-level double precision
floating-point numbers.  The same caveats apply as for floating-point numbers.
The real and imaginary parts of a complex number `z` can be retrieved through
the read-only attributes `z.real` and `z.imag`.

.. _datamodel-sequences:

**Sequences**

These represent finite ordered sets indexed by non-negative numbers. The
built-in function `len` returns the number of items of a sequence. When
the length of a sequence is *n*, the index set contains the numbers 0, 1,
..., *n*-1.  Item *i* of sequence *a* is selected by `a[i]`. Some sequences,
including built-in sequences, interpret negative subscripts by adding the
sequence length. For example, `a[-2]` equals `a[n-2]`, the second to last
item of sequence a with length `n`.

The resulting value must be a nonnegative integer less than the number of items
in the sequence. If it is not, an `IndexError` is raised.

Sequences also support slicing: `a[start:stop]` selects all items with index *k* such
that *start* `<=` *k* `<` *stop*.  When used as an expression, a slice is a
sequence of the same type. The comment above about negative subscripts also applies
to negative slice positions.
Note that no error is raised if a slice position is less than zero or larger
than the length of the sequence.

If *start* is missing or `None`, slicing behaves as if *start* was zero.
If *stop* is missing or `None`, slicing behaves as if *stop* was equal to
the length of the sequence.

Some sequences also support "extended slicing" with a third "step" parameter:
`a[i:j:k]` selects all items of *a* with index *x* where `x = i + n*k`, *n*
`>=` `0` and *i* `<=` *x* `<` *j*.

序列可根据其可变性来加以区分:

**Immutable sequences**

An object of an immutable sequence type cannot change once it is created.  (If
the object contains references to other objects, these other objects may be
mutable and may be changed; however, the collection of objects directly
referenced by an immutable object cannot change.)

以下类型属于不可变对象:

字符串

   A string (`str`) is a sequence of values that represent
   `characters`, or more formally, *Unicode code points*.
   All the code points in the range `0` to `0x10FFFF` can be
   represented in a string.

   Python doesn't have a dedicated *character* type.
   Instead, every code point in the string is represented as a string
   object with length `1`.

   The built-in function `ord`
   converts a code point from its string form to an integer in the
   range `0` to `0x10FFFF`; `chr` converts an integer in the range
   `0` to `0x10FFFF` to the corresponding length `1` string object.
   `str.encode` can be used to convert a `str` to
   `bytes` using the given text encoding, and
   `bytes.decode` can be used to achieve the opposite.

元组

   The items of a `tuple` are arbitrary Python objects. Tuples of two or
   more items are formed by comma-separated lists of expressions.  A tuple
   of one item (a 'singleton') can be formed by affixing a comma to an
   expression (an expression by itself does not create a tuple, since
   parentheses must be usable for grouping of expressions).  An empty
   tuple can be formed by an empty pair of parentheses.

字节串

   A `bytes` object is an immutable array.  The items are 8-bit bytes,
   represented by integers in the range 0 <= x < 256.  Bytes literals
   (like `b'abc'`) and the built-in `bytes` constructor
   can be used to create bytes objects.  Also, bytes objects can be
   decoded to strings via the `~bytes.decode` method.

**Mutable sequences**

Mutable sequences can be changed after they are created.  The subscription and
slicing notations can be used as the target of assignment and `del`
(delete) statements.

> **Note**
>
> The `collections` and `array` module provide
> additional examples of mutable sequence types.
>

目前有两种内生可变序列类型:

列表

   The items of a list are arbitrary Python objects.  Lists are formed by
   placing a comma-separated list of expressions in square brackets. (Note
   that there are no special cases needed to form lists of length 0 or 1.)

字节数组

   A bytearray object is a mutable array. They are created by the built-in
   `bytearray` constructor.  Aside from being mutable
   (and hence unhashable), byte arrays otherwise provide the same interface
   and functionality as immutable `bytes` objects.

**Set types**

These represent unordered, finite sets of unique, immutable objects. As such,
they cannot be indexed by any subscript. However, they can be iterated over, and
the built-in function `len` returns the number of items in a set. Common
uses for sets are fast membership testing, removing duplicates from a sequence,
and computing mathematical operations such as intersection, union, difference,
and symmetric difference.

For set elements, the same immutability rules apply as for dictionary keys. Note
that numeric types obey the normal rules for numeric comparison: if two numbers
compare equal (e.g., `1` and `1.0`), only one of them can be contained in a
set.

目前有两种内生集合类型:

集合

   These represent a mutable set. They are created by the built-in `set`
   constructor and can be modified afterwards by several methods, such as
   `~set.add`.

冻结集合

   These represent an immutable set.  They are created by the built-in
   `frozenset` constructor.  As a frozenset is immutable and
   `hashable`, it can be used again as an element of another set, or as
   a dictionary key.

.. _datamodel-mappings:

**Mappings**

These represent finite sets of objects indexed by arbitrary index sets. The
subscript notation `a[k]` selects the item indexed by `k` from the mapping
`a`; this can be used in expressions and as the target of assignments or
`del` statements. The built-in function `len` returns the number
of items in a mapping.

There are two intrinsic mapping types:

**Dictionaries**

These represent finite sets of objects indexed by nearly arbitrary values.  The
only types of values not acceptable as keys are values containing lists or
dictionaries or other mutable types that are compared by value rather than by
object identity, the reason being that the efficient implementation of
dictionaries requires a key's hash value to remain constant. Numeric types used
for keys obey the normal rules for numeric comparison: if two numbers compare
equal (e.g., `1` and `1.0`) then they can be used interchangeably to index
the same dictionary entry.

Dictionaries preserve insertion order, meaning that keys will be produced
in the same order they were added sequentially over the dictionary.
Replacing an existing key does not change the order, however removing a key
and re-inserting it will add it to the end instead of keeping its old place.

Dictionaries are mutable; they can be created by the `{}` notation (see
section `dict`).

The extension modules `dbm.ndbm` and `dbm.gnu` provide
additional examples of mapping types, as does the `collections`
module.

> *Changed in 3.7*: Dictionaries did not preserve insertion order in versions of Python before 3.6. In CPython 3.6, insertion order was preserved, but it was considered an implementation detail at that time rather than a language guarantee.

**Frozen dictionaries**

These represent an immutable dictionary.  They are created by the built-in
`frozendict` constructor.  A frozendict is `hashable` if all of
its keys and values are hashable, in which case it can be used as an element
of a set, or as a key in another mapping.  `frozendict` is not a
subclass of `dict`; it inherits directly from `object`.

> *Added in 3.15*

**Callable types**

These are the types to which the function call operation (see section
`calls`) can be applied:

.. _user-defined-funcs:

**User-defined functions**

A user-defined function object is created by a function definition (see
section `function`).  It should be called with an argument list
containing the same number of items as the function's formal parameter
list.

**Special read-only attributes**

list-table::

**Special writable attributes**

这些属性大多会检查赋值的类型：

list-table::

Function objects also support getting and setting arbitrary attributes, which
can be used, for example, to attach metadata to functions.  Regular attribute
dot-notation is used to get and set such attributes.

impl-detail::

Additional information about a function's definition can be retrieved from its
`code object`
(accessible via the `~function.__code__` attribute).

.. _instance-methods:

**Instance methods**

An instance method object combines a class, a class instance and any
callable object (normally a user-defined function).

特殊的只读属性：

list-table::

Methods also support accessing (but not setting) the arbitrary function
attributes on the underlying `function object`.

User-defined method objects may be created when getting an attribute of a
class (perhaps via an instance of that class), if that attribute is a
user-defined `function object` or a
`classmethod` object.

.. _method-binding:

When an instance method object is created by retrieving a user-defined
`function object` from a class via one of its
instances, its `~method.__self__` attribute is the instance, and the
method object is said to be *bound*.  The new method's `~method.__func__`
attribute is the original function object.

When an instance method object is created by retrieving a `classmethod`
object from a class or instance, its `~method.__self__` attribute is the
class itself, and its `~method.__func__` attribute is the function object
underlying the class method.

When an instance method object is called, the underlying function
(`~method.__func__`) is called, inserting the class instance
(`~method.__self__`) in front of the argument list.  For instance, when
`C` is a class which contains a definition for a function
`f`, and `x` is an instance of `C`, calling `x.f(1)` is
equivalent to calling `C.f(x, 1)`.

When an instance method object is derived from a `classmethod` object, the
"class instance" stored in `~method.__self__` will actually be the class
itself, so that calling either `x.f(1)` or `C.f(1)` is equivalent to
calling `f(C,1)` where `f` is the underlying function.

It is important to note that user-defined functions
which are attributes of a class instance are not converted to bound
methods; this *only* happens when the function is an attribute of the
class.

**Generator functions**

A function or method which contains a `yield` expression (see section
`yieldexpr`) is called a `generator function`.  Such a function, when
called, always returns an `iterator` object which can be used to
execute the body of the function:  calling the iterator's
`iterator.__next__` method will cause the function to execute until
it provides a value using the `yield` expression.  When the
function executes a `return` statement or falls off the end, a
`StopIteration` exception is raised and the iterator will have
reached the end of the set of values to be returned.

**Coroutine functions**

A function or method which is defined using `async def` is called
a `coroutine function`.  Such a function, when called, returns a
`coroutine` object.  It may contain `await` expressions,
as well as `async with` and `async for` statements. See
also the `coroutine-objects` section.

**Asynchronous generator functions**

A function or method which is defined using `async def` and
which contains a `yield` expression is called a
`asynchronous generator function`.  Such a function, when called,
returns an `asynchronous iterator` object which can be used in an
`async for` statement to execute the body of the function.

Calling the asynchronous iterator's
`aiterator.__anext__` method
will return an `awaitable` which when awaited
will execute until it provides a value using the `yield`
expression.  When the function executes an empty `return`
statement or falls off the end, a `StopAsyncIteration` exception
is raised and the asynchronous iterator will have reached the end of
the set of values to be yielded.

.. _builtin-functions:

**Built-in functions**

A built-in function object is a wrapper around a C function.  Examples of
built-in functions are `len` and `math.sin` (`math` is a
standard built-in module). The number and type of the arguments are
determined by the C function. Special read-only attributes:

* `__doc__` is the function's documentation string, or `None` if
  unavailable. See `function.__doc__`.
* `__name__` is the function's name. See `function.__name__`.
* `__self__` is set to `None` (but see the next item).
* `__module__` is the name of
  the module the function was defined in or `None` if unavailable.
  See `function.__module__`.

.. _builtin-methods:

**Built-in methods**

This is really a different disguise of a built-in function, this time containing
an object passed to the C function as an implicit extra argument.  An example of
a built-in method is `alist.append()`, assuming *alist* is a list object. In
this case, the special read-only attribute `__self__` is set to the object
denoted by *alist*. (The attribute has the same semantics as it does with
`other instance methods`.)

.. _classes:

**Classes**

Classes are callable.  These objects normally act as factories for new
instances of themselves, but variations are possible for class types that
override `~object.__new__`.  The arguments of the call are passed to
`__new__` and, in the typical case, to `~object.__init__` to
initialize the new instance.

**Class Instances**

Instances of arbitrary classes can be made callable by defining a
`~object.__call__` method in their class.

.. _module-objects:

**Modules**

Modules are a basic organizational unit of Python code, and are created by
the `import system` as invoked either by the
`import` statement, or by calling
functions such as `importlib.import_module` and built-in
`__import__`.  A module object has a namespace implemented by a
`dictionary` object (this is the dictionary referenced by the
`~function.__globals__`
attribute of functions defined in the module).  Attribute references are
translated to lookups in this dictionary, e.g., `m.x` is equivalent to
`m.__dict__["x"]`. A module object does not contain the code object used
to initialize the module (since it isn't needed once the initialization is
done).

Attribute assignment updates the module's namespace dictionary, e.g.,
`m.x = 1` is equivalent to `m.__dict__["x"] = 1`.

.. _import-mod-attrs:

**Import-related attributes on module objects**

Module objects have the following attributes that relate to the
`import system`. When a module is created using the machinery associated
with the import system, these attributes are filled in based on the module's
`spec`, before the `loader` executes and loads the
module.

To create a module dynamically rather than using the import system,
it's recommended to use `importlib.util.module_from_spec`,
which will set the various import-controlled attributes to appropriate values.
It's also possible to use the `types.ModuleType` constructor to create
modules directly, but this technique is more error-prone, as most attributes
must be manually set on the module object after it has been created when using
this approach.

> **Caution**
>
> With the exception of `~module.__name__`, it is **strongly**
> recommended that you rely on `~module.__spec__` and its attributes
> instead of any of the other individual attributes listed in this subsection.
> Note that updating an attribute on `__spec__` will not update the
> corresponding attribute on the module itself:
>
> ```python
>
> >>> import typing
> >>> typing.__name__, typing.__spec__.name
> ('typing', 'typing')
> >>> typing.__spec__.name = 'spelling'
> >>> typing.__name__, typing.__spec__.name
> ('typing', 'spelling')
> >>> typing.__name__ = 'keyboard_smashing'
> >>> typing.__name__, typing.__spec__.name
> ('keyboard_smashing', 'spelling')
> ```
>

attribute:: module.__name__

attribute:: module.__spec__

attribute:: module.__package__

attribute:: module.__loader__

attribute:: module.__path__

attribute:: module.__file__

> *Changed in 3.15*: The ``__cached__`` attribute is no longer set on modules or taken into consideration by the import system or standard library.

**Other writable attributes on module objects**

As well as the import-related attributes listed above, module objects also have
the following writable attributes:

attribute:: module.__doc__

attribute:: module.__annotations__

attribute:: module.__annotate__

attribute:: module.__lazy_modules__

**Module dictionaries**

模块对象还具有以下特殊的只读属性：

attribute:: module.__dict__

.. _class-attrs-and-methods:

**Custom classes**

Custom class types are typically created by class definitions (see section
`class`).  A class has a namespace implemented by a dictionary object.
Class attribute references are translated to lookups in this dictionary, e.g.,
`C.x` is translated to `C.__dict__["x"]` (although there are a number of
hooks which allow for other means of locating attributes). When the attribute
name is not found there, the attribute search continues in the base classes.
This search of the base classes uses the C3 method resolution order which
behaves correctly even in the presence of 'diamond' inheritance structures
where there are multiple inheritance paths leading back to a common ancestor.
Additional details on the C3 MRO used by Python can be found at
`python_2.3_mro`.

When a class attribute reference (for class `C`, say) would yield a
class method object, it is transformed into an instance method object whose
`~method.__self__` attribute is `C`.
When it would yield a `staticmethod` object,
it is transformed into the object wrapped by the static method
object. See section `descriptors` for another way in which attributes
retrieved from a class may differ from those actually contained in its
`~object.__dict__`.

Class attribute assignments update the class's dictionary, never the dictionary
of a base class.

类对象可被调用 (见上文) 以产生一个类实例 (见下文)。

**Special attributes**

list-table::

**Special methods**

In addition to the special attributes described above, all Python classes also
have the following two methods available:

method:: type.mro

method:: type.__subclasses__

**Class instances**

A class instance is created by calling a class object (see above).  A class
instance has a namespace implemented as a dictionary which is the first place
in which attribute references are searched.  When an attribute is not found
there, and the instance's class has an attribute by that name, the search
continues with the class attributes.  If a class attribute is found that is a
user-defined function object, it is transformed into an instance method
object whose `~method.__self__` attribute is the instance.  Static method and
class method objects are also transformed; see above under "Classes".  See
section `descriptors` for another way in which attributes of a class
retrieved via its instances may differ from the objects actually stored in
the class's `~object.__dict__`.  If no class attribute is found, and the
object's class has a `~object.__getattr__` method, that is called to satisfy
the lookup.

Attribute assignments and deletions update the instance's dictionary, never a
class's dictionary.  If the class has a `~object.__setattr__` or
`~object.__delattr__` method, this is called instead of updating the instance
dictionary directly.

Class instances can pretend to be numbers, sequences, or mappings if they have
methods with certain special names.  See section `specialnames`.

**Special attributes**

attribute:: object.__class__

attribute:: object.__dict__

**I/O objects (also known as file objects)**

A `file object` represents an open file.  Various shortcuts are
available to create file objects: the `open` built-in function, and
also `os.popen`, `os.fdopen`, and the
`~socket.socket.makefile` method of socket objects (and perhaps by
other functions or methods provided by extension modules).

File objects implement common methods, listed below, to simplify usage in
generic code. They are expected to be `context-managers`.

The objects `sys.stdin`, `sys.stdout` and `sys.stderr` are
initialized to file objects corresponding to the interpreter's standard
input, output and error streams; they are all open in text mode and
therefore follow the interface defined by the `io.TextIOBase`
abstract class.

method:: file.read(size=-1, /)

method:: file.write(data, /)

method:: file.close()

**Internal types**

A few types used internally by the interpreter are exposed to the user. Their
definitions may change with future versions of the interpreter, but they are
mentioned here for completeness.

.. _code-objects:

**Code objects**

Code objects represent *byte-compiled* executable Python code, or `bytecode`.
The difference between a code object and a function object is that the function
object contains an explicit reference to the function's globals (the module in
which it was defined), while a code object contains no context; also the default
argument values are stored in the function object, not in the code object
(because they represent values calculated at run-time).  Unlike function
objects, code objects are immutable and contain no references (directly or
indirectly) to mutable objects.

**Special read-only attributes**

list-table::

The following flag bits are defined for `~codeobject.co_flags`:
bit `0x04` is set if
the function uses the `*arguments` syntax to accept an arbitrary number of
positional arguments; bit `0x08` is set if the function uses the
`**keywords` syntax to accept arbitrary keyword arguments; bit `0x20` is set
if the function is a generator. See `inspect-module-co-flags` for details
on the semantics of each flags that might be present.

Future feature declarations (for example, `from __future__ import division`) also use bits
in `~codeobject.co_flags` to indicate whether a code object was compiled with a
particular feature enabled. See `~__future__._Feature.compiler_flag`.

:attr:`~codeobject.co_flags` 中的其他位被保留供内部使用。

If a code object represents a function and has a docstring,
the `~inspect.CO_HAS_DOCSTRING` bit is set in `~codeobject.co_flags`
and the first item in `~codeobject.co_consts` is
the docstring of the function.

**Methods on code objects**

method:: codeobject.co_positions()

method:: codeobject.co_lines()

method:: codeobject.replace(**kwargs)

.. _frame-objects:

**Frame objects**

Frame objects represent execution frames.  They may occur in
`traceback objects`,
and are also passed to registered trace functions.

**Special read-only attributes**

list-table::

**Special writable attributes**

list-table::

**Frame object methods**

帧对象支持一个方法:

method:: frame.clear()

.. _traceback-objects:

**Traceback objects**

Traceback objects represent the stack trace of an `exception`.
A traceback object
is implicitly created when an exception occurs, and may also be explicitly
created by calling `types.TracebackType`.

> *Changed in 3.7*: Traceback objects can now be explicitly instantiated from Python code.

For implicitly created tracebacks, when the search for an exception handler
unwinds the execution stack, at each unwound level a traceback object is
inserted in front of the current traceback.  When an exception handler is
entered, the stack trace is made available to the program. (See section
`try`.) It is accessible as the third item of the
tuple returned by `sys.exc_info`, and as the
`~BaseException.__traceback__` attribute
of the caught exception.

When the program contains no suitable
handler, the stack trace is written (nicely formatted) to the standard error
stream; if the interpreter is interactive, it is also made available to the user
as `sys.last_traceback`.

For explicitly created tracebacks, it is up to the creator of the traceback
to determine how the `~traceback.tb_next` attributes should be linked to
form a full stack trace.

特殊的只读属性：

list-table::

The line number and last instruction in the traceback may differ from the
line number of its `frame object` if the exception
occurred in a
`try` statement with no matching except clause or with a
`finally` clause.

attribute:: traceback.tb_next

**Slice objects**

Slice objects are used to represent slices for
`~object.__getitem__`
methods.  They are also created by the built-in `slice` function.

> *Added in 3.15*: The :func:`slice` type now supports :ref:`subscription <subscriptions>`. For example, ``slice[float]`` may be used in type annotations to indicate a slice containing :type:`float` objects.

Special read-only attributes: `~slice.start` is the lower bound;
`~slice.stop` is the upper bound; `~slice.step` is the step
value; each is `None` if omitted.  These attributes can have any type.

切片对象支持一个方法:

method:: slice.indices(self, length)

**Static method objects**

Static method objects provide a way of defeating the transformation of function
objects to method objects described above. A static method object is a wrapper
around any other object, usually a user-defined method object. When a static
method object is retrieved from a class or a class instance, the object actually
returned is the wrapped object, which is not subject to any further
transformation. Static method objects are also callable. Static method
objects are created by the built-in `staticmethod` constructor.

**Class method objects**

A class method object, like a static method object, is a wrapper around another
object that alters the way in which that object is retrieved from classes and
class instances. The behaviour of class method objects upon such retrieval is
described above, under `"instance methods"`. Class method objects are created
by the built-in `classmethod` constructor.

.. _specialnames:

**Special method names**

A class can implement certain operations that are invoked by special syntax
(such as arithmetic operations or subscripting and slicing) by defining methods
with special names. This is Python's approach to `operator overloading`,
allowing classes to define their own behavior with respect to language
operators.  For instance, if a class defines a method named
`~object.__getitem__`,
and `x` is an instance of this class, then `x[i]` is roughly equivalent
to `type(x).__getitem__(x, i)`.  Except where mentioned, attempts to execute an
operation raise an exception when no appropriate method is defined (typically
`AttributeError` or `TypeError`).

Setting a special method to `None` indicates that the corresponding
operation is not available.  For example, if a class sets
`~object.__iter__` to `None`, the class is not iterable, so calling
`iter` on its instances will raise a `TypeError` (without
falling back to `~object.__getitem__`). [#]_

When implementing a class that emulates any built-in type, it is important that
the emulation only be implemented to the degree that it makes sense for the
object being modelled.  For example, some sequences may work well with retrieval
of individual elements, but extracting a slice may not make sense.
(One example of this is the `NodeList` interface
in the W3C's Document Object Model.)

.. _customization:

**Basic customization**

method:: object.__new__(cls[, ...])

method:: object.__init__(self[, ...])

method:: object.__del__(self)

method:: object.__repr__(self)

method:: object.__str__(self)

method:: object.__bytes__(self)

method:: object.__format__(self, format_spec)

.. _richcmpfuncs:

method:: object.__lt__(self, other)

method:: object.__hash__(self)

method:: object.__bool__(self)

.. _attribute-access:

**Customizing attribute access**

The following methods can be defined to customize the meaning of attribute
access (use of, assignment to, or deletion of `x.name`) for class instances.

.. XXX explain how descriptors interfere here!

method:: object.__getattr__(self, name)

method:: object.__getattribute__(self, name)

method:: object.__setattr__(self, name, value)

method:: object.__delattr__(self, name)

method:: object.__dir__(self)

**Customizing module attribute access**

method:: module.__getattr__

Special names `__getattr__` and `__dir__` can be also used to customize
access to module attributes. The `__getattr__` function at the module level
should accept one argument which is the name of an attribute and return the
computed value or raise an `AttributeError`. If an attribute is
not found on a module object through the normal lookup, i.e.
`object.__getattribute__`, then `__getattr__` is searched in
the module `__dict__` before raising an `AttributeError`. If found,
it is called with the attribute name and the result is returned.

The `__dir__` function should accept no arguments, and return an iterable of
strings that represents the names accessible on module. If present, this
function overrides the standard `dir` search on a module.

attribute:: module.__class__

For a more fine grained customization of the module behavior (setting
attributes, properties, etc.), one can set the `__class__` attribute of
a module object to a subclass of `types.ModuleType`. For example::

   import sys
   from types import ModuleType

   class VerboseModule(ModuleType):
       def __repr__(self):
           return f'Verbose {self.__name__}'

       def __setattr__(self, attr, value):
           print(f'Setting {attr}...')
           super().__setattr__(attr, value)

   sys.modules[__name__].__class__ = VerboseModule

> **Note**
>
> Defining module `__getattr__` and setting module `__class__` only
> affect lookups made using the attribute access syntax -- directly accessing
> the module globals (whether by code within the module, or via a reference
> to the module's globals dictionary) is unaffected.
>

> *Changed in 3.5*: ``__class__`` module attribute is now writable.

> *Added in 3.7*: ``__getattr__`` and ``__dir__`` module attributes.

> **Seealso**
>
> PEP 562 - Module __getattr__ and __dir__
>    Describes the `__getattr__` and `__dir__` functions on modules.
>

.. _descriptors:

**Implementing Descriptors**

The following methods only apply when an instance of the class containing the
method (a so-called *descriptor* class) appears in an *owner* class (the
descriptor must be in either the owner's class dictionary or in the class
dictionary for one of its parents).  In the examples below, "the attribute"
refers to the attribute whose name is the key of the property in the owner
class' `~object.__dict__`.  The `object` class itself does not
implement any of these protocols.

method:: object.__get__(self, instance, owner=None)

method:: object.__set__(self, instance, value)

method:: object.__delete__(self, instance)

Instances of descriptors may also have the `__objclass__` attribute
present:

attribute:: object.__objclass__

.. _descriptor-invocation:

**Invoking Descriptors**

In general, a descriptor is an object attribute with "binding behavior", one
whose attribute access has been overridden by methods in the descriptor
protocol:  `~object.__get__`, `~object.__set__`, and
`~object.__delete__`. If any of
those methods are defined for an object, it is said to be a descriptor.

The default behavior for attribute access is to get, set, or delete the
attribute from an object's dictionary. For instance, `a.x` has a lookup chain
starting with `a.__dict__['x']`, then `type(a).__dict__['x']`, and
continuing through the base classes of `type(a)` excluding metaclasses.

However, if the looked-up value is an object defining one of the descriptor
methods, then Python may override the default behavior and invoke the descriptor
method instead.  Where this occurs in the precedence chain depends on which
descriptor methods were defined and how they were called.

The starting point for descriptor invocation is a binding, `a.x`. How the
arguments are assembled depends on `a`:

Direct Call
   The simplest and least common call is when user code directly invokes a
   descriptor method:    `x.__get__(a)`.

Instance Binding
   If binding to an object instance, `a.x` is transformed into the call:
   `type(a).__dict__['x'].__get__(a, type(a))`.

Class Binding
   If binding to a class, `A.x` is transformed into the call:
   `A.__dict__['x'].__get__(None, A)`.

Super Binding
   A dotted lookup such as `super(A, a).x` searches
   `a.__class__.__mro__` for a base class `B` following `A` and then
   returns `B.__dict__['x'].__get__(a, A)`.  If not a descriptor, `x` is
   returned unchanged.

```python
:hide:

class Desc:
    def __get__(*args):
        return args

class B:

    x = Desc()

class A(B):

    x = 999

    def m(self):
        'Demonstrate these two descriptor invocations are equivalent'
        result1 = super(A, self).x
        result2 = B.__dict__['x'].__get__(self, A)
        return result1 == result2
```

```python
:hide:

>>> a = A()
>>> a.__class__.__mro__.index(B) > a.__class__.__mro__.index(A)
True
>>> super(A, a).x == B.__dict__['x'].__get__(a, A)
True
>>> a.m()
True
```

For instance bindings, the precedence of descriptor invocation depends on
which descriptor methods are defined.  A descriptor can define any combination
of `~object.__get__`, `~object.__set__` and
`~object.__delete__`.  If it does not
define `__get__`, then accessing the attribute will return the descriptor
object itself unless there is a value in the object's instance dictionary.  If
the descriptor defines `__set__` and/or `__delete__`, it is a data
descriptor; if it defines neither, it is a non-data descriptor.  Normally, data
descriptors define both `__get__` and `__set__`, while non-data
descriptors have just the `__get__` method.  Data descriptors with
`__get__` and `__set__` (and/or `__delete__`) defined
always override a redefinition in an
instance dictionary.  In contrast, non-data descriptors can be overridden by
instances.

Python methods (including those decorated with
`staticmethod` and `classmethod`) are
implemented as non-data descriptors.  Accordingly, instances can redefine and
override methods.  This allows individual instances to acquire behaviors that
differ from other instances of the same class.

The `property` decorator is implemented as a data descriptor. Accordingly,
instances cannot override the behavior of a property.

.. _slots:

**__slots__**

*__slots__* allow us to explicitly declare data members (like
properties) and deny the creation of `~object.__dict__` and *__weakref__*
(unless explicitly declared in *__slots__* or available in a parent.)

The space saved over using `~object.__dict__` can be significant.
Attribute lookup speed can be significantly improved as well.

data:: object.__slots__

.. _datamodel-note-slots:

使用 *__slots__* 的注意事项:

* When inheriting from a class without *__slots__*, the
  `~object.__dict__` and
  *__weakref__* attribute of the instances will always be accessible.

* Without a `~object.__dict__` variable, instances cannot be assigned new
  variables not
  listed in the *__slots__* definition.  Attempts to assign to an unlisted
  variable name raises `AttributeError`. If dynamic assignment of new
  variables is desired, then add `'__dict__'` to the sequence of strings in
  the *__slots__* declaration.

* Without a *__weakref__* variable for each instance, classes defining
  *__slots__* do not support `weak references` to its instances.
  If weak reference
  support is needed, then add `'__weakref__'` to the sequence of strings in the
  *__slots__* declaration.

* *__slots__* are implemented at the class level by creating `descriptors`
  for each variable name.  As a result, class attributes
  cannot be used to set default values for instance variables defined by
  *__slots__*; otherwise, the class attribute would overwrite the descriptor
  assignment.

* The action of a *__slots__* declaration is not limited to the class
  where it is defined.  *__slots__* declared in parents are available in
  child classes. However, instances of a child subclass will get a
  `~object.__dict__` and *__weakref__* unless the subclass also defines
  *__slots__* (which should only contain names of any *additional* slots).

* If a class defines a slot also defined in a base class, the instance variable
  defined by the base class slot is inaccessible (except by retrieving its
  descriptor directly from the base class). This renders the meaning of the
  program undefined.  In the future, a check may be added to prevent this.

* `TypeError` will be raised if *__slots__* other than *__dict__* and
  *__weakref__* are defined for a class derived from a
  :c`"variable-length" built-in type` such as
  `int`, `bytes`, and `type`, except `tuple`.

* Any non-string `iterable` may be assigned to *__slots__*.

* If a `dictionary` is used to assign *__slots__*, the dictionary
  keys will be used as the slot names. The values of the dictionary can be used
  to provide per-attribute docstrings that will be recognised by
  `inspect.getdoc` and displayed in the output of `help`.

* `~object.__class__` assignment works only if both classes have the
  same *__slots__*.

* `Multiple inheritance` with multiple slotted parent
  classes can be used,
  but only one parent is allowed to have attributes created by slots
  (the other bases must have empty slot layouts) - violations raise
  `TypeError`.

* If an `iterator` is used for *__slots__* then a `descriptor` is
  created for each
  of the iterator's values. However, the *__slots__* attribute will be an empty
  iterator.

> *Changed in 3.15*: Allowed defining the *__dict__* and *__weakref__* *__slots__* for any class. Allowed defining any *__slots__* for a class derived from :class:`tuple`.

.. _class-customization:

**Customizing class creation**

Whenever a class inherits from another class, `~object.__init_subclass__` is
called on the parent class. This way, it is possible to write classes which
change the behavior of subclasses. This is closely related to class
decorators, but where class decorators only affect the specific class they're
applied to, `__init_subclass__` solely applies to future subclasses of the
class defining the method.

classmethod:: object.__init_subclass__(cls)

When a class is created, `type.__new__` scans the class variables
and makes callbacks to those with a `~object.__set_name__` hook.

method:: object.__set_name__(self, owner, name)

.. _metaclasses:

**Metaclasses**

By default, classes are constructed using `type`. The class body is
executed in a new namespace and the class name is bound locally to the
result of `type(name, bases, namespace)`.

The class creation process can be customized by passing the `metaclass`
keyword argument in the class definition line, or by inheriting from an
existing class that included such an argument. In the following example,
both `MyClass` and `MySubclass` are instances of `Meta`::

   class Meta(type):
       pass

   class MyClass(metaclass=Meta):
       pass

   class MySubclass(MyClass):
       pass

Any other keyword arguments that are specified in the class definition are
passed through to all metaclass operations described below.

当一个类定义被执行时，将发生以下步骤:

* MRO entries are resolved;
* the appropriate metaclass is determined;
* the class namespace is prepared;
* the class body is executed;
* the class object is created.

**Resolving MRO entries**

method:: object.__mro_entries__(self, bases)

> **Seealso**
>
> `types.resolve_bases`
>    Dynamically resolve bases that are not instances of `type`.
>
> `types.get_original_bases`
>    Retrieve a class's "original bases" prior to modifications by
>    `~object.__mro_entries__`.
>
> PEP 560
>    Core support for typing module and generic types.
>

.. _metaclass-determination:

**Determining the appropriate metaclass**

为一个类定义确定适当的元类是根据以下规则:

* if no bases and no explicit metaclass are given, then `type` is used;
* if an explicit metaclass is given and it is *not* an instance of
  `type`, then it is used directly as the metaclass;
* if an instance of `type` is given as the explicit metaclass, or
  bases are defined, then the most derived metaclass is used.

The most derived metaclass is selected from the explicitly specified
metaclass (if any) and the metaclasses (i.e. `type(cls)`) of all specified
base classes. The most derived metaclass is one which is a subtype of *all*
of these candidate metaclasses. If none of the candidate metaclasses meets
that criterion, then the class definition will fail with `TypeError`.

.. _prepare:

**Preparing the class namespace**

Once the appropriate metaclass has been identified, then the class namespace
is prepared. If the metaclass has a `__prepare__` attribute, it is called
as `namespace = metaclass.__prepare__(name, bases, **kwds)` (where the
additional keyword arguments, if any, come from the class definition). The
`__prepare__` method should be implemented as a
`classmethod`. The
namespace returned by `__prepare__` is passed in to `__new__`, but when
the final class object is created the namespace is copied into a new `dict`.

If the metaclass has no `__prepare__` attribute, then the class namespace
is initialised as an empty ordered mapping.

> **Seealso**
>
> PEP 3115 - Metaclasses in Python 3000
>    Introduced the `__prepare__` namespace hook
>

**Executing the class body**

The class body is executed (approximately) as
`exec(body, globals(), namespace)`. The key difference from a normal
call to `exec` is that lexical scoping allows the class body (including
any methods) to reference names from the current and outer scopes when the
class definition occurs inside a function.

However, even when the class definition occurs inside the function, methods
defined inside the class still cannot see names defined at the class scope.
Class variables must be accessed through the first parameter of instance or
class methods, or through the implicit lexically scoped `__class__` reference
described in the next section.

.. _class-object-creation:

**Creating the class object**

Once the class namespace has been populated by executing the class body,
the class object is created by calling
`metaclass(name, bases, namespace, **kwds)` (the additional keywords
passed here are the same as those passed to `__prepare__`).

This class object is the one that will be referenced by the zero-argument
form of `super`. `__class__` is an implicit closure reference
created by the compiler if any methods in a class body refer to either
`__class__` or `super`. This allows the zero argument form of
`super` to correctly identify the class being defined based on
lexical scoping, while the class or instance that was used to make the
current call is identified based on the first argument passed to the method.

impl-detail::

When using the default metaclass `type`, or any metaclass that ultimately
calls `type.__new__`, the following additional customization steps are
invoked after creating the class object:

1) The `type.__new__` method collects all of the attributes in the class
   namespace that define a `~object.__set_name__` method;
2) Those `__set_name__` methods are called with the class
   being defined and the assigned name of that particular attribute;
3) The `~object.__init_subclass__` hook is called on the
   immediate parent of the new class in its method resolution order.

After the class object is created, it is passed to the class decorators
included in the class definition (if any) and the resulting object is bound
in the local namespace as the defined class.

When a new class is created by `type.__new__`, the object provided as the
namespace parameter is copied to a new ordered mapping and the original
object is discarded. The new copy is wrapped in a read-only proxy, which
becomes the `~type.__dict__` attribute of the class object.

> **Seealso**
>
> PEP 3135 - New super
>    Describes the implicit `__class__` closure reference
>

**Uses for metaclasses**

The potential uses for metaclasses are boundless. Some ideas that have been
explored include enum, logging, interface checking, automatic delegation,
automatic property creation, proxies, frameworks, and automatic resource
locking/synchronization.

**Customizing instance and subclass checks**

The following methods are used to override the default behavior of the
`isinstance` and `issubclass` built-in functions.

In particular, the metaclass `abc.ABCMeta` implements these methods in
order to allow the addition of Abstract Base Classes (ABCs) as "virtual base
classes" to any class or type (including built-in types), including other
ABCs.

method:: type.__instancecheck__(self, instance)

method:: type.__subclasscheck__(self, subclass)

Note that these methods are looked up on the type (metaclass) of a class.  They
cannot be defined as class methods in the actual class.  This is consistent with
the lookup of special methods that are called on instances, only in this
case the instance is itself a class.

> **Seealso**
>
> PEP 3119 - Introducing Abstract Base Classes
>    Includes the specification for customizing `isinstance` and
>    `issubclass` behavior through `~type.__instancecheck__` and
>    `~type.__subclasscheck__`, with motivation for this functionality
>    in the context of adding Abstract Base Classes (see the `abc`
>    module) to the language.
>

**Emulating generic types**

When using `type annotations`, it is often useful to
*parameterize* a `generic type` using Python's square-brackets notation.
For example, the annotation `list[int]` might be used to signify a
`list` in which all the elements are of type `int`.

> **Seealso**
>
> PEP 484 - Type Hints
>    Introducing Python's framework for type annotations
>
> `Generic Alias Types`
>    Documentation for objects representing parameterized generic classes
>
> `Generics`, `user-defined generics` and `typing.Generic`
>    Documentation on how to implement generic classes that can be
>    parameterized at runtime and understood by static type-checkers.
>

A class can *generally* only be parameterized if it defines the special
class method `__class_getitem__()`.

classmethod:: object.__class_getitem__(cls, key)

**The purpose of *__class_getitem__***

The purpose of `~object.__class_getitem__` is to allow runtime
parameterization of standard-library generic classes in order to more easily
apply `type hints` to these classes.

To implement custom generic classes that can be parameterized at runtime and
understood by static type-checkers, users should either inherit from a standard
library class that already implements `~object.__class_getitem__`, or
inherit from `typing.Generic`, which has its own implementation of
`__class_getitem__()`.

Custom implementations of `~object.__class_getitem__` on classes defined
outside of the standard library may not be understood by third-party
type-checkers such as mypy. Using `__class_getitem__()` on any class for
purposes other than type hinting is discouraged.

.. _classgetitem-versus-getitem:

***__class_getitem__* versus *__getitem__***

Usually, the `subscription` of an object using square
brackets will call the `~object.__getitem__` instance method defined on
the object's class. However, if the object being subscribed is itself a class,
the class method `~object.__class_getitem__` may be called instead.
`__class_getitem__()` should return a `GenericAlias`
object if it is properly defined.

Presented with the `expression` `obj[x]`, the Python interpreter
follows something like the following process to decide whether
`~object.__getitem__` or `~object.__class_getitem__` should be
called::

   from inspect import isclass

   def subscribe(obj, x):
       """Return the result of the expression 'obj[x]'"""

       class_of_obj = type(obj)

       # If the class of obj defines __getitem__,
       # call class_of_obj.__getitem__(obj, x)
       if hasattr(class_of_obj, '__getitem__'):
           return class_of_obj.__getitem__(obj, x)

       # Else, if obj is a class and defines __class_getitem__,
       # call obj.__class_getitem__(x)
       elif isclass(obj) and hasattr(obj, '__class_getitem__'):
           return obj.__class_getitem__(x)

       # Else, raise an exception
       else:
           raise TypeError(
               f"'{class_of_obj.__name__}' object is not subscriptable"
           )

In Python, all classes are themselves instances of other classes. The class of
a class is known as that class's `metaclass`, and most classes have the
`type` class as their metaclass. `type` does not define
`~object.__getitem__`, meaning that expressions such as `list[int]`,
`dict[str, float]` and `tuple[str, bytes]` all result in
`~object.__class_getitem__` being called::

   >>> # list has class "type" as its metaclass, like most classes:
   >>> type(list)
   <class 'type'>
   >>> type(dict) == type(list) == type(tuple) == type(str) == type(bytes)
   True
   >>> # "list[int]" calls "list.__class_getitem__(int)"
   >>> list[int]
   list[int]
   >>> # list.__class_getitem__ returns a GenericAlias object:
   >>> type(list[int])
   <class 'types.GenericAlias'>

However, if a class has a custom metaclass that defines
`~object.__getitem__`, subscribing the class may result in different
behaviour. An example of this can be found in the `enum` module::

   >>> from enum import Enum
   >>> class Menu(Enum):
   ...     """A breakfast menu"""
   ...     SPAM = 'spam'
   ...     BACON = 'bacon'
   ...
   >>> # Enum classes have a custom metaclass:
   >>> type(Menu)
   <class 'enum.EnumMeta'>
   >>> # EnumMeta defines __getitem__,
   >>> # so __class_getitem__ is not called,
   >>> # and the result is not a GenericAlias object:
   >>> Menu['SPAM']
   <Menu.SPAM: 'spam'>
   >>> type(Menu['SPAM'])
   <enum 'Menu'>

> **Seealso**
>
> PEP 560 - Core Support for typing module and generic types
>    Introducing `~object.__class_getitem__`, and outlining when a
>    `subscription` results in `__class_getitem__()`
>    being called instead of `~object.__getitem__`
>

.. _callable-types:

**Emulating callable objects**

method:: object.__call__(self[, args...])

.. _sequence-types:

**Emulating container types**

The following methods can be defined to implement container objects. None of them
are provided by the `object` class itself. Containers usually are
`sequences` (such as `lists` or
`tuples`) or `mappings` (like
`dictionaries`),
but can represent other containers as well.  The first set of methods is used
either to emulate a sequence or to emulate a mapping; the difference is that for
a sequence, the allowable keys should be the integers *k* for which `0 <= k <
N` where *N* is the length of the sequence, or `slice` objects, which define a
range of items.  It is also recommended that mappings provide the methods
`keys`, `values`, `items`, `get`, `clear`,
`setdefault`, `pop`, `popitem`, `copy`, and
`update` behaving similar to those for Python's standard `dictionary`
objects.  The `collections.abc` module provides a
`~collections.abc.MutableMapping`
`abstract base class` to help create those methods from a base set of
`~object.__getitem__`, `~object.__setitem__`,
`~object.__delitem__`, and `keys`.

Mutable sequences should provide methods
`~sequence.append`, `~sequence.clear`, `~sequence.count`,
`~sequence.extend`, `~sequence.index`, `~sequence.insert`,
`~sequence.pop`, `~sequence.remove`, and `~sequence.reverse`,
like Python standard `list` objects.
Finally, sequence types should implement addition (meaning concatenation) and
multiplication (meaning repetition) by defining the methods
`~object.__add__`, `~object.__radd__`, `~object.__iadd__`,
`~object.__mul__`, `~object.__rmul__` and `~object.__imul__`
described below; they should not define other numerical
operators.

It is recommended that both mappings and sequences implement the
`~object.__contains__` method to allow efficient use of the `in`
operator; for
mappings, `in` should search the mapping's keys; for sequences, it should
search through the values.  It is further recommended that both mappings and
sequences implement the `~object.__iter__` method to allow efficient iteration
through the container; for mappings, `__iter__` should iterate
through the object's keys; for sequences, it should iterate through the values.

method:: object.__len__(self)

method:: object.__length_hint__(self)

method:: object.__getitem__(self, subscript)

method:: object.__setitem__(self, key, value)

method:: object.__delitem__(self, key)

method:: object.__missing__(self, key)

method:: object.__iter__(self)

method:: object.__reversed__(self)

The membership test operators (`in` and `not in`) are normally
implemented as an iteration through a container. However, container objects can
supply the following special method with a more efficient implementation, which
also does not require the object be iterable.

method:: object.__contains__(self, item)

.. _numeric-types:

**Emulating numeric types**

The following methods can be defined to emulate numeric objects. Methods
corresponding to operations that are not supported by the particular kind of
number implemented (e.g., bitwise operations for non-integral numbers) should be
left undefined.

method:: object.__add__(self, other)

method:: object.__radd__(self, other)

method:: object.__iadd__(self, other)

method:: object.__neg__(self)

method:: object.__complex__(self)

method:: object.__index__(self)

method:: object.__round__(self, [,ndigits])

.. _context-managers:

**With Statement Context Managers**

A `context manager` is an object that defines the runtime context to be
established when executing a `with` statement. The context manager
handles the entry into, and the exit from, the desired runtime context for the
execution of the block of code.  Context managers are normally invoked using the
`with` statement (described in section `with`), but can also be
used by directly invoking their methods.

Typical uses of context managers include saving and restoring various kinds of
global state, locking and unlocking resources, closing opened files, etc.

For more information on context managers, see `typecontextmanager`.
The `object` class itself does not provide the context manager methods.

method:: object.__enter__(self)

method:: object.__exit__(self, exc_type, exc_value, traceback)

> **Seealso**
>
> PEP 343 - The "with" statement
>    The specification, background, and examples for the Python `with`
>    statement.
>

.. _class-pattern-matching:

**Customizing positional arguments in class pattern matching**

When using a class name in a pattern, positional arguments in the pattern are not
allowed by default, i.e. `case MyClass(x, y)` is typically invalid without special
support in `MyClass`. To be able to use that kind of pattern, the class needs to
define a *__match_args__* attribute.

data:: object.__match_args__

For example, if `MyClass.__match_args__` is `("left", "center", "right")` that means
that `case MyClass(x, y)` is equivalent to `case MyClass(left=x, center=y)`. Note
that the number of arguments in the pattern must be smaller than or equal to the number
of elements in *__match_args__*; if it is larger, the pattern match attempt will raise
a `TypeError`.

> *Added in 3.10*

> **Seealso**
>
> PEP 634 - Structural Pattern Matching
>    The specification for the Python `match` statement.
>

.. _python-buffer-protocol:

**Emulating buffer types**

The `buffer protocol` provides a way for Python
objects to expose efficient access to a low-level memory array. This protocol
is implemented by builtin types such as `bytes` and `memoryview`,
and third-party libraries may define additional buffer types.

While buffer types are usually implemented in C, it is also possible to
implement the protocol in Python.

method:: object.__buffer__(self, flags)

method:: object.__release_buffer__(self, buffer)

> *Added in 3.12*

> **Seealso**
>
> PEP 688 - Making the buffer protocol accessible in Python
>    Introduces the Python `__buffer__` and `__release_buffer__` methods.
>
> `collections.abc.Buffer`
>    ABC for buffer types.
>

**Annotations**

Functions, classes, and modules may contain `annotations`,
which are a way to associate information (usually `type hints`)
with a symbol.

attribute:: object.__annotations__

method:: object.__annotate__(format)

> **Seealso**
>
> PEP 649 --- Deferred evaluation of annotation using descriptors
>    Introduces lazy evaluation of annotations and the `__annotate__` function.
>

.. _special-lookup:

**Special method lookup**

For custom classes, implicit invocations of special methods are only guaranteed
to work correctly if defined on an object's type, not in the object's instance
dictionary.  That behaviour is the reason why the following code raises an
exception::

   >>> class C:
   ...     pass
   ...
   >>> c = C()
   >>> c.__len__ = lambda: 5
   >>> len(c)
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: object of type 'C' has no len()

The rationale behind this behaviour lies with a number of special methods such
as `~object.__hash__` and `~object.__repr__` that are implemented
by all objects,
including type objects. If the implicit lookup of these methods used the
conventional lookup process, they would fail when invoked on the type object
itself::

   >>> 1 .__hash__() == hash(1)
   True
   >>> int.__hash__() == hash(int)
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: descriptor '__hash__' of 'int' object needs an argument

Incorrectly attempting to invoke an unbound method of a class in this way is
sometimes referred to as 'metaclass confusion', and is avoided by bypassing
the instance when looking up special methods::

   >>> type(1).__hash__(1) == hash(1)
   True
   >>> type(int).__hash__(int) == hash(int)
   True

In addition to bypassing any instance attributes in the interest of
correctness, implicit special method lookup generally also bypasses the
`~object.__getattribute__` method even of the object's metaclass::

   >>> class Meta(type):
   ...     def __getattribute__(*args):
   ...         print("Metaclass getattribute invoked")
   ...         return type.__getattribute__(*args)
   ...
   >>> class C(object, metaclass=Meta):
   ...     def __len__(self):
   ...         return 10
   ...     def __getattribute__(*args):
   ...         print("Class getattribute invoked")
   ...         return object.__getattribute__(*args)
   ...
   >>> c = C()
   >>> c.__len__()                 # Explicit lookup via instance
   Class getattribute invoked
   10
   >>> type(c).__len__(c)          # Explicit lookup via type
   Metaclass getattribute invoked
   10
   >>> len(c)                      # Implicit lookup
   10

Bypassing the `~object.__getattribute__` machinery in this fashion
provides significant scope for speed optimisations within the
interpreter, at the cost of some flexibility in the handling of
special methods (the special method *must* be set on the class
object itself in order to be consistently invoked by the interpreter).

**Coroutines**

**Awaitable Objects**

An `awaitable` object generally implements an `~object.__await__` method.
`Coroutine objects` returned from `async def` functions
are awaitable.

> **Note**
>
> The `generator iterator` objects returned from generators
> decorated with `types.coroutine`
> are also awaitable, but they do not implement `~object.__await__`.
>

method:: object.__await__(self)

> *Added in 3.5*

> **Seealso**
>
>

.. _coroutine-objects:

**Coroutine Objects**

`Coroutine objects` are `awaitable` objects.
A coroutine's execution can be controlled by calling `~object.__await__` and
iterating over the result.  When the coroutine has finished executing and
returns, the iterator raises `StopIteration`, and the exception's
`~StopIteration.value` attribute holds the return value.  If the
coroutine raises an exception, it is propagated by the iterator.  Coroutines
should not directly raise unhandled `StopIteration` exceptions.

Coroutines also have the methods listed below, which are analogous to
those of generators (see `generator-methods`).  However, unlike
generators, coroutines do not directly support iteration.

Coroutines are `generic` over the types of their yield, send,
and return values, respectively.

> *Changed in 3.5.2*: It is a :exc:`RuntimeError` to await on a coroutine more than once.

method:: coroutine.send(value)

method:: coroutine.throw(value)

method:: coroutine.close()

.. _async-iterators:

**Asynchronous Iterators**

An *asynchronous iterator* can call asynchronous code in
its `__anext__` method.

异步迭代器可在 :keyword:`async for` 语句中使用。

:class:`object` 类本身不提供这些方法。

method:: object.__aiter__(self)

method:: object.__anext__(self)

异步可迭代对象的一个示例::

    class Reader:
        async def readline(self):
            ...

        def __aiter__(self):
            return self

        async def __anext__(self):
            val = await self.readline()
            if val == b'':
                raise StopAsyncIteration
            return val

> *Added in 3.5*

> *Changed in 3.7*: Prior to Python 3.7, :meth:`~object.__aiter__` could return an *awaitable* that would resolve to an :term:`asynchronous iterator <asynchronous iterator>`.  Starting with Python 3.7, :meth:`~object.__aiter__` must return an asynchronous iterator object.  Returning anything else will result in a :exc:`TypeError` error.

.. _async-context-managers:

**Asynchronous Context Managers**

An *asynchronous context manager* is a *context manager* that is able to
suspend execution in its `__aenter__` and `__aexit__` methods.

异步上下文管理器可在 :keyword:`async with` 语句中使用。

:class:`object` 类本身不提供这些方法。

method:: object.__aenter__(self)

method:: object.__aexit__(self, exc_type, exc_value, traceback)

异步上下文管理器类的一个示例::

    class AsyncContextManager:
        async def __aenter__(self):
            await log('entering context')

        async def __aexit__(self, exc_type, exc, tb):
            await log('exiting context')

> *Added in 3.5*

#### Footnotes

.. [#] It *is* possible in some cases to change an object's type, under certain
   controlled conditions. It generally isn't a good idea though, since it can
   lead to some very strange behaviour if it is handled incorrectly.

.. [#] The `~object.__hash__`, `~object.__iter__`,
   `~object.__reversed__`, `~object.__contains__`,
   `~object.__class_getitem__` and `~os.PathLike.__fspath__`
   methods have special handling for this. Others
   will still raise a `TypeError`, but may do so by relying on
   the behavior that `None` is not callable.

.. [#] "Does not support" here means that the class has no such method, or
   the method returns `NotImplemented`.  Do not set the method to
   `None` if you want to force fallback to the right operand's reflected
   method—that will instead have the opposite effect of explicitly
   *blocking* such fallback.

.. [#] For operands of the same type, it is assumed that if the non-reflected method
   (such as `~object.__add__`) fails then the operation is not supported, which is why the
   reflected method is not called.

.. [#] If the right operand's type is a subclass of the left operand's type, the
   reflected method having precedence allows subclasses to override their ancestors'
   operations.
