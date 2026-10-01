---
id: "python-en-function-dis-code_info"
language: "python"
lang: "en"
category: "function"
name: "code_info"
signature: "code_info(x)"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.code_info"
license: "PSF"
updated: "2026-10-01"
---

# code_info

Return a formatted multi-line string with detailed code object information
for the supplied function, generator, asynchronous generator, coroutine,
method, source code string or code object.

Note that the exact contents of code info strings are highly implementation
dependent and they may change arbitrarily across Python VMs or Python
releases.

> *Added in 3.2*

> *Changed in 3.7*: This can now handle coroutine and asynchronous generator objects.
