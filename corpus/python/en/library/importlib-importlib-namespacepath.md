---
id: "python-en-function-importlib-namespacepath"
language: "python"
lang: "en"
category: "function"
name: "NamespacePath"
signature: "NamespacePath(name, path, path_finder)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.NamespacePath"
license: "PSF"
updated: "2026-10-01"
---

# NamespacePath

Represents a `namespace package`'s path (`module.__path__`).

When its `__path__` value is accessed it will be recomputed if necessary.
This keeps it in-sync with the global state (`sys.modules`).

The *name* argument is the name of the namespace module.

The *path* argument is the initial path value.

The *path_finder* argument is the callable used to recompute the path value.
The callable has the same signature as `importlib.abc.MetaPathFinder.find_spec`.

When the parent's `module.__path__` attribute is updated, the path
value is recomputed.

If the parent module is missing from `sys.modules`, then
`ModuleNotFoundError` will be raised.

For top-level modules, the parent module's path is `sys.path`.

> **Note**
>
> `PathFinder.invalidate_caches` invalidates `NamespacePath`,
> forcing the path value to be recomputed next time it is accessed.
>

> *Added in 3.15*
