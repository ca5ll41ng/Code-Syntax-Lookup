---
id: "python-en-function-profile-runctx"
language: "python"
lang: "en"
category: "function"
name: "runctx"
signature: "runctx(command, globals, locals, filename=None, sort=-1)"
directive: "function"
module: "profile"
source_url: "https://docs.python.org/3/library/profile.html#profile.runctx"
license: "PSF"
updated: "2026-10-01"
---

# runctx

This function is similar to `run`, with added arguments to supply the
globals and locals mappings for the *command* string. This routine
executes::

   exec(command, globals, locals)

and gathers profiling statistics as in the `run` function above.
