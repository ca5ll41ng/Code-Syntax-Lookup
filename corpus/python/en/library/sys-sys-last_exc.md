---
id: "python-en-function-sys-last_exc"
language: "python"
lang: "en"
category: "function"
name: "last_exc"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.last_exc"
license: "PSF"
updated: "2026-10-01"
---

# last_exc

This variable is not always defined; it is set to the exception instance
when an exception is not handled and the interpreter prints an error message
and a stack traceback.  Its intended use is to allow an interactive user to
import a debugger module and engage in post-mortem debugging without having
to re-execute the command that caused the error.  (Typical use is
`import pdb; pdb.pm()` to enter the post-mortem debugger; see `pdb`
module for more information.)

> *Added in 3.12*
