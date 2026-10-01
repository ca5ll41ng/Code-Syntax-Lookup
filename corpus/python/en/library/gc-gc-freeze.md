---
id: "python-en-function-gc-freeze"
language: "python"
lang: "en"
category: "function"
name: "freeze"
signature: "freeze()"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.freeze"
license: "PSF"
updated: "2026-10-01"
---

# freeze

Freeze all the objects tracked by the garbage collector; move them to a
permanent generation and ignore them in all the future collections.

If a process will `fork()` without `exec()`, avoiding unnecessary
copy-on-write in child processes will maximize memory sharing and reduce
overall memory usage. This requires both avoiding creation of freed "holes"
in memory pages in the parent process and ensuring that GC collections in
child processes won't touch the `gc_refs` counter of long-lived objects
originating in the parent process. To accomplish both, call `gc.disable()`
early in the parent process, `gc.freeze()` right before `fork()`, and
`gc.enable()` early in child processes.

> *Added in 3.7*
