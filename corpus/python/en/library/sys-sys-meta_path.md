---
id: "python-en-function-sys-meta_path"
language: "python"
lang: "en"
category: "function"
name: "meta_path"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.meta_path"
license: "PSF"
updated: "2026-10-01"
---

# meta_path

A list of `meta path finder` objects that have their
`~importlib.abc.MetaPathFinder.find_spec` methods called to see if one
of the objects can find the module to be imported. By default, it holds entries
that implement Python's default import semantics. The
`~importlib.abc.MetaPathFinder.find_spec` method is called with at
least the absolute name of the module being imported. If the module to be
imported is contained in a package, then the parent package's
`~module.__path__`
attribute is passed in as a second argument. The method returns a
`module spec`, or `None` if the module cannot be found.

> **Seealso**
>
> `importlib.abc.MetaPathFinder`
>   The abstract base class defining the interface of finder objects on
>   `meta_path`.
> `importlib.machinery.ModuleSpec`
>   The concrete class which
>   `~importlib.abc.MetaPathFinder.find_spec` should return
>   instances of.
>

> *Changed in 3.4*: :term:`Module specs <module spec>` were introduced in Python 3.4, by :pep:`451`.

> *Changed in 3.12*: Removed the fallback that looked for a :meth:`!find_module` method if a :data:`meta_path` entry didn't have a :meth:`~importlib.abc.MetaPathFinder.find_spec` method.
