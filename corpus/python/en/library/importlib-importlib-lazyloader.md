---
id: "python-en-function-importlib-lazyloader"
language: "python"
lang: "en"
category: "function"
name: "LazyLoader"
signature: "LazyLoader(loader)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.LazyLoader"
license: "PSF"
updated: "2026-10-01"
---

# LazyLoader

A class which postpones the execution of the loader of a module until the
module has an attribute accessed.

This class **only** works with loaders that define
`~importlib.abc.Loader.exec_module` as control over what module type
is used for the module is required. For those same reasons, the loader's
`~importlib.abc.Loader.create_module` method must return `None` or a
type for which its `__class__` attribute can be mutated along with not
using `slots`. Finally, modules which substitute the object
placed into `sys.modules` will not work as there is no way to properly
replace the module references throughout the interpreter safely;
`ValueError` is raised if such a substitution is detected.

> **Note**
>
> For projects where startup time is critical, this class allows for
> potentially minimizing the cost of loading a module if it is never used.
> For projects where startup time is not essential then use of this class is
> **heavily** discouraged due to error messages created during loading being
> postponed and thus occurring out of context.
>

> *Added in 3.5*

> *Changed in 3.6*: Began calling :meth:`~importlib.abc.Loader.create_module`, removing the compatibility warning for :class:`importlib.machinery.BuiltinImporter` and :class:`importlib.machinery.ExtensionFileLoader`.

classmethod:: factory(loader)
