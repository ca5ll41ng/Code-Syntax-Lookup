---
id: "python-en-function-tkinter-nodefaultroot"
language: "python"
lang: "en"
category: "function"
name: "NoDefaultRoot"
signature: "NoDefaultRoot()"
directive: "function"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.NoDefaultRoot"
license: "PSF"
updated: "2026-10-01"
---

# NoDefaultRoot

Inhibit the creation of an implicit default root window.
Afterwards `tkinter` no longer creates a shared default root
automatically, and operations that rely on one --- such as constructing a
widget without an explicit *master* --- raise a `RuntimeError`.
Call this early in larger applications to make the root window explicit.
