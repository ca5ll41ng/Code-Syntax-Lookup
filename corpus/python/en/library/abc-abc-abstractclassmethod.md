---
id: "python-en-function-abc-abstractclassmethod"
language: "python"
lang: "en"
category: "function"
name: "abstractclassmethod"
directive: "decorator"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.abstractclassmethod"
license: "PSF"
updated: "2026-10-01"
---

# abstractclassmethod

> *Added in 3.2*

deprecated-removed:: 3.3 3.21

A subclass of the built-in `classmethod`, indicating an abstract
classmethod. Otherwise it is similar to `abstractmethod`.

This special case is deprecated, as the `classmethod` decorator
is now correctly identified as abstract when applied to an abstract
method::

   class C(ABC):
       @classmethod
       @abstractmethod
       def my_abstract_classmethod(cls, arg):
           ...
