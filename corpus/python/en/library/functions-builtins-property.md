---
id: "python-en-function-builtins-property"
language: "python"
lang: "en"
category: "function"
name: "property"
signature: "property(fget=None, fset=None, fdel=None, doc=None)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#property"
license: "PSF"
updated: "2026-10-01"
---

# property

Return a property attribute.

*fget* is a function for getting an attribute value.  *fset* is a function
for setting an attribute value. *fdel* is a function for deleting an attribute
value.  And *doc* creates a docstring for the attribute.

A typical use is to define a managed attribute `x`::

   class C:
       def __init__(self):
           self._x = None

       def getx(self):
           return self._x

       def setx(self, value):
           self._x = value

       def delx(self):
           del self._x

       x = property(getx, setx, delx, "I'm the 'x' property.")

If *c* is an instance of *C*, `c.x` will invoke the getter,
`c.x = value` will invoke the setter, and `del c.x` the deleter.

If given, *doc* will be the docstring of the property attribute. Otherwise, the
property will copy *fget*'s docstring (if it exists).  This makes it possible to
create read-only properties easily using `property` as a `decorator`::

   class Parrot:
       def __init__(self):
           self._voltage = 100000

       @property
       def voltage(self):
           """Get the current voltage."""
           return self._voltage

The `@property` decorator turns the `voltage` method into a "getter"
for a read-only attribute with the same name, and it sets the docstring for
*voltage* to "Get the current voltage."

decorator:: property.getter

decorator:: property.setter

decorator:: property.deleter

> *Changed in 3.5*: The docstrings of property objects are now writeable.

attribute:: __name__
