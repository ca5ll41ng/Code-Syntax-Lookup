---
id: "python-en-function-site-startupstate"
language: "python"
lang: "en"
category: "function"
name: "StartupState"
signature: "StartupState(known_paths=None)"
directive: "class"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.StartupState"
license: "PSF"
updated: "2026-10-01"
---

# StartupState

Instances of this class accumulate interpreter startup configuration data
from one or more site directories.  They are the preferred interface for
batching the processing of `.pth` and `.start` files across
multiple site directories, so that every `sys.path` extension is
visible before any startup code runs.

The optional *known_paths* argument is a set of case-normalized paths
(which can be produced by `makepath`) used to prevent duplicate
`sys.path` entries.  When `None` (the default), the set is built
from the current `sys.path`.  `main` implicitly uses an
instance of this class.

Typical use:

```python

state = site.StartupState()
for sitedir in site_dirs:
    state.addsitedir(sitedir)
state.process()
```

> *Added in 3.15*

method:: addsitedir(sitedir)

method:: addusersitepackages()

method:: addsitepackages(prefixes=None)

method:: process()
