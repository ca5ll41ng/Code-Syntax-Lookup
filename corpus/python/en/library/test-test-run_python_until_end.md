---
id: "python-en-function-test-run_python_until_end"
language: "python"
lang: "en"
category: "function"
name: "run_python_until_end"
signature: "run_python_until_end(*args, **env_vars)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.run_python_until_end"
license: "PSF"
updated: "2026-10-01"
---

# run_python_until_end

Set up the environment based on *env_vars* for running the interpreter
in a subprocess.  The values can include `__isolated`, `__cleanenv`,
`__cwd`, and `TERM`.

> *Changed in 3.9*: The function no longer strips whitespaces from *stderr*.
