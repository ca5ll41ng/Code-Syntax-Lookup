---
id: "python-en-function-test-assert_python_ok"
language: "python"
lang: "en"
category: "function"
name: "assert_python_ok"
signature: "assert_python_ok(*args, **env_vars)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.assert_python_ok"
license: "PSF"
updated: "2026-10-01"
---

# assert_python_ok

Assert that running the interpreter with *args* and optional environment
variables *env_vars* succeeds (`rc == 0`) and return a `(return code,
stdout, stderr)` tuple.

If the *__cleanenv* keyword-only parameter is set, *env_vars* is used as a fresh
environment.

Python is started in isolated mode (command line option `-I`),
except if the *__isolated* keyword-only parameter is set to `False`.

> *Changed in 3.9*: The function no longer strips whitespaces from *stderr*.
