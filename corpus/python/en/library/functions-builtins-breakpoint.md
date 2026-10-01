---
id: "python-en-function-builtins-breakpoint"
language: "python"
lang: "en"
category: "function"
name: "breakpoint"
signature: "breakpoint(*args, **kws)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#breakpoint"
license: "PSF"
updated: "2026-10-01"
---

# breakpoint

This function drops you into the debugger at the call site.  Specifically,
it calls `sys.breakpointhook`, passing `args` and `kws` straight
through.  By default, `sys.breakpointhook()` calls
`pdb.set_trace` expecting no arguments.  In this case, it is
purely a convenience function so you don't have to explicitly import
`pdb` or type as much code to enter the debugger.  However,
`sys.breakpointhook` can be set to some other function and
`breakpoint` will automatically call that, allowing you to drop into
the debugger of choice.
If `sys.breakpointhook` is not accessible, this function will
raise `RuntimeError`.

By default, the behavior of `breakpoint` can be changed with
the `PYTHONBREAKPOINT` environment variable.
See `sys.breakpointhook` for usage details.

Note that this is not guaranteed if `sys.breakpointhook`
has been replaced.

audit-event:: builtins.breakpoint breakpointhook breakpoint

> *Added in 3.7*
