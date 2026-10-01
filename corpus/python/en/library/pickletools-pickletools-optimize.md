---
id: "python-en-function-pickletools-optimize"
language: "python"
lang: "en"
category: "function"
name: "optimize"
signature: "optimize(picklestring)"
directive: "function"
module: "pickletools"
source_url: "https://docs.python.org/3/library/pickletools.html#pickletools.optimize"
license: "PSF"
updated: "2026-10-01"
---

# optimize

Returns a new equivalent pickle string after eliminating unused `PUT`
opcodes. The optimized pickle is shorter, takes less transmission time,
requires less storage space, and unpickles more efficiently.
