---
id: "python-en-function-sys-base_prefix"
language: "python"
lang: "en"
category: "function"
name: "base_prefix"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.base_prefix"
license: "PSF"
updated: "2026-10-01"
---

# base_prefix

Equivalent to `prefix`, but referring to the base Python installation.

When running under `virtual environment`,
`prefix` gets overwritten to the virtual environment prefix.
`base_prefix`, conversely, does not change, and always points to
the base Python installation.
Refer to `sys-path-init-virtual-environments` for more information.

> *Added in 3.3*
