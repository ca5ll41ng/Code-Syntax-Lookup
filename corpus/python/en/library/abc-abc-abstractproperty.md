---
id: "python-en-function-abc-abstractproperty"
language: "python"
lang: "en"
category: "function"
name: "abstractproperty"
directive: "decorator"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.abstractproperty"
license: "PSF"
updated: "2026-10-01"
---

# abstractproperty

deprecated-removed:: 3.3 3.21

A subclass of the built-in `property`, indicating an abstract
property.

This special case is deprecated, as the `property` decorator
is now correctly identified as abstract when applied to an abstract
method::

   class C(ABC):
       @property
       @abstractmethod
       def my_abstract_property(self):
           ...

The above example defines a read-only property; you can also define a
read-write abstract property by appropriately marking one or more of the
underlying methods as abstract::

   class C(ABC):
       @property
       def x(self):
           ...

       @x.setter
       @abstractmethod
       def x(self, val):
           ...

If only some components are abstract, only those components need to be
updated to create a concrete property in a subclass::

   class D(C):
       @C.x.setter
       def x(self, val):
           ...
