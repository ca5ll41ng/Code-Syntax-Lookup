---
id: "python-en-function-sys-__unraisablehook__"
language: "python"
lang: "en"
category: "function"
name: "__unraisablehook__"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.__unraisablehook__"
license: "PSF"
updated: "2026-10-01"
---

# __unraisablehook__

These objects contain the original values of `breakpointhook`,
`displayhook`, `excepthook`, and `unraisablehook` at the start of the
program.  They are saved so that `breakpointhook`, `displayhook` and
`excepthook`, `unraisablehook` can be restored in case they happen to
get replaced with broken or alternative objects.

> *Added in 3.7*: __breakpointhook__

> *Added in 3.8*: __unraisablehook__
