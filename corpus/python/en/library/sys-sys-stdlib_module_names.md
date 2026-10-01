---
id: "python-en-function-sys-stdlib_module_names"
language: "python"
lang: "en"
category: "function"
name: "stdlib_module_names"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.stdlib_module_names"
license: "PSF"
updated: "2026-10-01"
---

# stdlib_module_names

A frozenset of strings containing the names of standard library modules.

It is the same on all platforms. Modules which are not available on
some platforms and modules disabled at Python build are also listed.
All module kinds are listed: pure Python, built-in, frozen and extension
modules. Test modules are excluded.

For packages, only the main package is listed: sub-packages and sub-modules
are not listed. For example, the `email` package is listed, but the
`email.mime` sub-package and the `email.message` sub-module are not
listed.

See also the `sys.builtin_module_names` list.

> *Added in 3.10*
