---
id: "python-en-function-pickle-object-__reduce__"
language: "python"
lang: "en"
category: "function"
name: "object.__reduce__"
signature: "object.__reduce__()"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__reduce__"
license: "PSF"
updated: "2026-10-01"
---

# object.__reduce__

The interface is currently defined as follows.  The `__reduce__` method
takes no argument and shall return either a string or preferably a tuple (the
returned object is often referred to as the "reduce value").

If a string is returned, the string should be interpreted as the name of a
global variable.  It should be the object's local name relative to its
module; the pickle module searches the module namespace to determine the
object's module: for a given `obj` to be pickled, the `__module__`
attribute is looked up on `obj` directly, which falls back to a lookup
on the type of `obj` if no `__module__` instance attribute is set.
This behaviour is typically useful for singletons.

When a tuple is returned, it must be between two and six items long.
Optional items can either be omitted, or `None` can be provided as their
value.  The semantics of each item are in order:

.. XXX Mention __newobj__ special-case?

* A callable object that will be called to create the initial version of the
  object.

* A tuple of arguments for the callable object.  An empty tuple must be given
  if the callable does not accept any argument.

* Optionally, the object's state, which will be passed to the object's
  `__setstate__` method as previously described.  If the object has no
  such method then, the value must be a dictionary and it will be added to
  the object's `~object.__dict__` attribute.

* Optionally, an iterator (and not a sequence) yielding successive items.
  These items will be appended to the object either using
  `obj.append(item)` or, in batch, using `obj.extend(list_of_items)`.
  This is primarily used for list subclasses, but may be used by other
  classes as long as they have `~sequence.append`
  and `~sequence.extend` methods with
  the appropriate signature.  (Whether `append` or `extend` is
  used depends on which pickle protocol version is used as well as the number
  of items to append, so both must be supported.)

* Optionally, an iterator (not a sequence) yielding successive key-value
  pairs.  These items will be stored to the object using `obj[key] =
  value`.  This is primarily used for dictionary subclasses, but may be used
  by other classes as long as they implement `__setitem__`.

* Optionally, a callable with a `(obj, state)` signature. This
  callable allows the user to programmatically control the state-updating
  behavior of a specific object, instead of using `obj`'s static
  `__setstate__` method. If not `None`, this callable will have
  priority over `obj`'s `__setstate__`.

> *Added in 3.8*: The optional sixth tuple item, ``(obj, state)``, was added.
