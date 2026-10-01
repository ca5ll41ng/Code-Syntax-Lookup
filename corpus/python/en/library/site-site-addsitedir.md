---
id: "python-en-function-site-addsitedir"
language: "python"
lang: "en"
category: "function"
name: "addsitedir"
signature: "addsitedir(sitedir, known_paths=None)"
directive: "function"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.addsitedir"
license: "PSF"
updated: "2026-10-01"
---

# addsitedir

Add a directory to sys.path and parse the `.pth` and `.start`
files found in that directory.  Typically used in `sitecustomize` or
`usercustomize` (see above).

The *known_paths* argument is an optional set of case-normalized paths
used to prevent duplicate `sys.path` entries.  When `None` (the
default), the set is built from the current `sys.path`.

For batched processing across multiple site directories, build a
`StartupState` explicitly and call `StartupState.addsitedir`
on it; that defers `.pth` and `.start` processing until a
single `StartupState.process` call, ensuring every `sys.path`
extension is visible before any startup code runs.

> *Changed in 3.15*: Also processes :file:`.start` files.  See :ref:`site-start-files`.
