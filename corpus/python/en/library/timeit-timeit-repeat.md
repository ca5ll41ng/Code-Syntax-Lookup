---
id: "python-en-function-timeit-repeat"
language: "python"
lang: "en"
category: "function"
name: "repeat"
signature: "repeat(stmt='pass', setup='pass', timer=<default timer>, repeat=5, number=1000000, globals=None)"
directive: "function"
module: "timeit"
source_url: "https://docs.python.org/3/library/timeit.html#timeit.repeat"
license: "PSF"
updated: "2026-10-01"
---

# repeat

Create a `Timer` instance with the given statement, *setup* code and
*timer* function and run its `.repeat` method with the given *repeat*
count and *number* executions.  The optional *globals* argument specifies a
namespace in which to execute the code.

> *Changed in 3.5*: The optional *globals* parameter was added.

> *Changed in 3.7*: Default value of *repeat* changed from 3 to 5.
