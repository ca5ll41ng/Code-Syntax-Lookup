---
id: "python-en-function-types-prepare_class"
language: "python"
lang: "en"
category: "function"
name: "prepare_class"
signature: "prepare_class(name, bases=(), kwds=None)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.prepare_class"
license: "PSF"
updated: "2026-10-01"
---

# prepare_class

Calculates the appropriate metaclass and creates the class namespace.

The arguments are the components that make up a class definition header:
the class name, the base classes (in order) and the keyword arguments
(such as `metaclass`).

The return value is a 3-tuple: `metaclass, namespace, kwds`

*metaclass* is the appropriate metaclass, *namespace* is the
prepared class namespace and *kwds* is an updated copy of the passed
in *kwds* argument with any `'metaclass'` entry removed. If no *kwds*
argument is passed in, this will be an empty dict.

> *Added in 3.3*

> *Changed in 3.6*: The default value for the ``namespace`` element of the returned tuple has changed.  Now an insertion-order-preserving mapping is used when the metaclass does not have a ``__prepare__`` method.
