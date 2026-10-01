---
id: "python-en-function-faulthandler-dump_c_stack"
language: "python"
lang: "en"
category: "function"
name: "dump_c_stack"
signature: "dump_c_stack(file=sys.stderr)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/3/library/faulthandler.html#faulthandler.dump_c_stack"
license: "PSF"
updated: "2026-10-01"
---

# dump_c_stack

Dump the C stack trace of the current thread into *file*.

If the Python build does not support it or the operating system
does not provide a stack trace, then this prints an error in place
of a dumped C stack.
