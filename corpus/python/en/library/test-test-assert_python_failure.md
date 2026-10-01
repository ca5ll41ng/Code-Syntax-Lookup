---
id: "python-en-function-test-assert_python_failure"
language: "python"
lang: "en"
category: "function"
name: "assert_python_failure"
signature: "assert_python_failure(*args, **env_vars)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.assert_python_failure"
license: "PSF"
updated: "2026-10-01"
---

# assert_python_failure

Assert that running the interpreter with *args* and optional environment
variables *env_vars* fails (`rc != 0`) and return a `(return code,
stdout, stderr)` tuple.

See `assert_python_ok` for more options.

> *Changed in 3.9*: The function no longer strips whitespaces from *stderr*.
