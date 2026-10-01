---
id: "python-en-function-profile-run"
language: "python"
lang: "en"
category: "function"
name: "run"
signature: "run(command, filename=None, sort=-1)"
directive: "function"
module: "profile"
source_url: "https://docs.python.org/3/library/profile.html#profile.run"
license: "PSF"
updated: "2026-10-01"
---

# run

This function takes a single argument that can be passed to the `exec`
function, and an optional file name.  In all cases this routine executes::

   exec(command, __main__.__dict__, __main__.__dict__)

and gathers profiling statistics from the execution. If no file name is
present, then this function automatically creates a `~pstats.Stats`
instance and prints a simple profiling report. If the sort value is specified,
it is passed to this `~pstats.Stats` instance to control how the
results are sorted.
