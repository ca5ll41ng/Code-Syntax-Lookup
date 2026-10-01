---
id: "python-en-function-types-moduletype"
language: "python"
lang: "en"
category: "function"
name: "ModuleType"
signature: "ModuleType(name, doc=None)"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.ModuleType"
license: "PSF"
updated: "2026-10-01"
---

# ModuleType

The type of `modules`. The constructor takes the name of the
module to be created and optionally its `docstring`.

> **Seealso**
>
> `Documentation on module objects`
>    Provides details on the special attributes that can be found on
>    instances of `ModuleType`.
>
> `importlib.util.module_from_spec`
>    Modules created using the `ModuleType` constructor are
>    created with many of their special attributes unset or set to default
>    values. `module_from_spec` provides a more robust way of
>    creating `ModuleType` instances which ensures the various
>    attributes are set appropriately.
>
