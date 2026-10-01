---
id: "python-en-function-abc-abstractstaticmethod"
language: "python"
lang: "en"
category: "function"
name: "abstractstaticmethod"
directive: "decorator"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.abstractstaticmethod"
license: "PSF"
updated: "2026-10-01"
---

# abstractstaticmethod

> *Added in 3.2*

deprecated-removed:: 3.3 3.21

A subclass of the built-in `staticmethod`, indicating an abstract
staticmethod. Otherwise it is similar to `abstractmethod`.

This special case is deprecated, as the `staticmethod` decorator
is now correctly identified as abstract when applied to an abstract
method::

   class C(ABC):
       @staticmethod
       @abstractmethod
       def my_abstract_staticmethod(arg):
           ...
