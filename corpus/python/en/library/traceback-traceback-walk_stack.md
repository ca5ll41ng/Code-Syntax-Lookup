---
id: "python-en-function-traceback-walk_stack"
language: "python"
lang: "en"
category: "function"
name: "walk_stack"
signature: "walk_stack(f)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.walk_stack"
license: "PSF"
updated: "2026-10-01"
---

# walk_stack

Walk a stack following `f.f_back` from the given frame,
yielding the frame
and line number for each frame. If *f* is `None`, the current stack is
used. This helper is used with `StackSummary.extract`.

> *Added in 3.5*

> *Changed in 3.14*: This function previously returned a generator that would walk the stack when first iterated over. The generator returned now is the state of the stack when ``walk_stack`` is called.
