---
id: "python-en-function-importlib-metadata-entry_points"
language: "python"
lang: "en"
category: "function"
name: "entry_points"
signature: "entry_points(**select_params)"
directive: "function"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.entry_points"
license: "PSF"
updated: "2026-10-01"
---

# entry_points

Returns a `EntryPoints` instance describing entry points for the
current environment. Any given keyword parameters are passed to the
`select` method for comparison to the attributes of
the individual entry point definitions.

Note: to query for entry points based on `EntryPoint.dist` attribute,
use `Distribution.entry_points` instead (as different `Distribution`
instances do not currently compare equal, even if they have the same attributes)
