---
id: "python-en-function-pdb-set_default_backend"
language: "python"
lang: "en"
category: "function"
name: "set_default_backend"
signature: "set_default_backend(backend)"
directive: "function"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#pdb.set_default_backend"
license: "PSF"
updated: "2026-10-01"
---

# set_default_backend

There are two supported backends for pdb: `'settrace'` and `'monitoring'`.
See `bdb.Bdb` for details. The user can set the default backend to
use if none is specified when instantiating `Pdb`. If no backend is
specified, the default is `'settrace'`.

> **Note**
>
> `breakpoint` and `set_trace` will not be affected by this
> function. They always use `'monitoring'` backend.
>

> *Added in 3.14*
