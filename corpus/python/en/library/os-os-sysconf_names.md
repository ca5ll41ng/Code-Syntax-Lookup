---
id: "python-en-function-os-sysconf_names"
language: "python"
lang: "en"
category: "function"
name: "sysconf_names"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sysconf_names"
license: "PSF"
updated: "2026-10-01"
---

# sysconf_names

Dictionary mapping names accepted by `sysconf` to the integer values
defined for those names by the host operating system. This can be used to
determine the set of names known to the system.

availability:: Unix.

> *Changed in 3.11*: Add ``'SC_MINSIGSTKSZ'`` name.
