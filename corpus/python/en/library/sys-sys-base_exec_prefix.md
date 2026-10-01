---
id: "python-en-function-sys-base_exec_prefix"
language: "python"
lang: "en"
category: "function"
name: "base_exec_prefix"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.base_exec_prefix"
license: "PSF"
updated: "2026-10-01"
---

# base_exec_prefix

Equivalent to `exec_prefix`, but referring to the base Python installation.

When running under `sys-path-init-virtual-environments`,
`exec_prefix` gets overwritten to the virtual environment prefix.
`base_exec_prefix`, conversely, does not change, and always points to
the base Python installation.
Refer to `sys-path-init-virtual-environments` for more information.

> *Added in 3.3*
