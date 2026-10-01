---
id: "python-en-function-linecache-lazycache"
language: "python"
lang: "en"
category: "function"
name: "lazycache"
signature: "lazycache(filename, module_globals)"
directive: "function"
module: "linecache"
source_url: "https://docs.python.org/3/library/linecache.html#linecache.lazycache"
license: "PSF"
updated: "2026-10-01"
---

# lazycache

Capture enough detail about a non-file-based module to permit getting its
lines later via `getline` even if *module_globals* is `None` in the later
call. This avoids doing I/O until a line is actually needed, without having
to carry the module globals around indefinitely.

> *Added in 3.5*
