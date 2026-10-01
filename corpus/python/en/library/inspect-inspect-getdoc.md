---
id: "python-en-function-inspect-getdoc"
language: "python"
lang: "en"
category: "function"
name: "getdoc"
signature: "getdoc(object, *, inherit_class_doc=True, fallback_to_class_doc=True, dedent=True)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getdoc"
license: "PSF"
updated: "2026-10-01"
---

# getdoc

Get the documentation string for an object, cleaned up with `cleandoc`
(with the same meaning of *dedent*).
If the documentation string for an object is not provided:

* if the object is a class and *inherit_class_doc* is true (by default),
  retrieve the documentation string from the inheritance hierarchy;
* if the object is a method, a property or a descriptor, retrieve
  the documentation string from the inheritance hierarchy;
* otherwise, if *fallback_to_class_doc* is true (by default), retrieve
  the documentation string from the class of the object.

Return `None` if the documentation string is invalid or missing.

> *Changed in 3.5*: Documentation strings are now inherited if not overridden.

> *Changed in 3.15*: Added parameters *inherit_class_doc* and *fallback_to_class_doc*.  Documentation strings on :class:`~functools.cached_property` objects are now inherited if not overridden.

> *Changed in next*: Added the *dedent* parameter.
