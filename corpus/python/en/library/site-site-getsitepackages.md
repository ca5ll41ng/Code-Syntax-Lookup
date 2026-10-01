---
id: "python-en-function-site-getsitepackages"
language: "python"
lang: "en"
category: "function"
name: "getsitepackages"
signature: "getsitepackages(prefixes=None)"
directive: "function"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.getsitepackages"
license: "PSF"
updated: "2026-10-01"
---

# getsitepackages

Return a list containing all global site-packages directories.

For each directory given in *prefixes* (or `PREFIXES` if *prefixes*
is `None`), this function will compute its site-packages subdirectory
depending on the system environment, and will return a list of full paths,
which are not checked for existence.

> *Added in 3.2*

> *Changed in 3.3*: Added the optional *prefixes* parameter.
