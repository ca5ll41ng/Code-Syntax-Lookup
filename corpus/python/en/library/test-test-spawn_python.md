---
id: "python-en-function-test-spawn_python"
language: "python"
lang: "en"
category: "function"
name: "spawn_python"
signature: "spawn_python(*args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, **kw)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.spawn_python"
license: "PSF"
updated: "2026-10-01"
---

# spawn_python

Run a Python subprocess with the given arguments.

*kw* is extra keyword args to pass to `subprocess.Popen`. Returns a
`subprocess.Popen` object.
