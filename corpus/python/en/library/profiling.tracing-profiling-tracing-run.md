---
id: "python-en-function-profiling-tracing-run"
language: "python"
lang: "en"
category: "function"
name: "run"
signature: "run(command, filename=None, sort=-1)"
directive: "function"
module: "profiling.tracing"
source_url: "https://docs.python.org/3/library/profiling.tracing.html#profiling.tracing.run"
license: "PSF"
updated: "2026-10-01"
---

# run

Profile execution of a command and print or save the results.

This function executes the *command* string using `exec` in the
`__main__` module's namespace::

   exec(command, __main__.__dict__, __main__.__dict__)

If *filename* is not provided, the function creates a `pstats.Stats`
instance and prints a summary to standard output. If *filename* is
provided, the raw profile data is saved to that file for later analysis
with `pstats`.

The *sort* argument specifies the sort order for printed output, accepting
any value recognized by `pstats.Stats.sort_stats`.
