---
id: "python-en-function-importlib-metadata-packages_distributions"
language: "python"
lang: "en"
category: "function"
name: "packages_distributions"
signature: "packages_distributions()"
directive: "function"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.packages_distributions"
license: "PSF"
updated: "2026-10-01"
---

# packages_distributions

Return a mapping from the top level module and import package
names found via `sys.meta_path` to the names of the distribution
packages (if any) that provide the corresponding files.

To allow for namespace packages (which may have members provided by
multiple distribution packages), each top level import name maps to a
list of distribution names rather than mapping directly to a single name.
