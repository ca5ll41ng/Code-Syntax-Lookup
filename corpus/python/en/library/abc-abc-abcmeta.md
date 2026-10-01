---
id: "python-en-function-abc-abcmeta"
language: "python"
lang: "en"
category: "function"
name: "ABCMeta"
directive: "class"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.ABCMeta"
license: "PSF"
updated: "2026-10-01"
---

# ABCMeta

Metaclass for defining Abstract Base Classes (ABCs).

Use this metaclass to create an ABC.  An ABC can be subclassed directly, and
then acts as a mix-in class.  You can also register unrelated concrete
classes (even built-in classes) and unrelated ABCs as "virtual subclasses" --
these and their descendants will be considered subclasses of the registering
ABC by the built-in `issubclass` function, but the registering ABC
won't show up in their MRO (Method Resolution Order) nor will method
implementations defined by the registering ABC be callable (not even via
`super`). [#]_

Classes created with a metaclass of `ABCMeta` have the following method:

method:: register(subclass)

You can also override this method in an abstract base class:

method:: __subclasshook__(subclass)

For a demonstration of these concepts, look at this example ABC definition::

   class Foo:
       def __getitem__(self, index):
           ...
       def __len__(self):
           ...
       def get_iterator(self):
           return iter(self)

   class MyIterable(ABC):

       @abstractmethod
       def __iter__(self):
           while False:
               yield None

       def get_iterator(self):
           return self.__iter__()

       @classmethod
       def __subclasshook__(cls, C):
           if cls is MyIterable:
               if any("__iter__" in B.__dict__ for B in C.__mro__):
                   return True
           return NotImplemented

   MyIterable.register(Foo)

The ABC `MyIterable` defines the standard iterable method,
`~object.__iter__`, as an abstract method.  The implementation given
here can still be called from subclasses.  The `get_iterator` method
is also part of the `MyIterable` abstract base class, but it does not have
to be overridden in non-abstract derived classes.

The `__subclasshook__` class method defined here says that any class
that has an `~object.__iter__` method in its
`~object.__dict__` (or in that of one of its base classes, accessed
via the `~type.__mro__` list) is considered a `MyIterable` too.

Finally, the last line makes `Foo` a virtual subclass of `MyIterable`,
even though it does not define an `~object.__iter__` method (it uses
the old-style iterable protocol, defined in terms of `~object.__len__` and
`~object.__getitem__`).  Note that this will not make `get_iterator`
available as a method of `Foo`, so it is provided separately.
