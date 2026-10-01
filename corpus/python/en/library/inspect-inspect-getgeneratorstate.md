---
id: "python-en-function-inspect-getgeneratorstate"
language: "python"
lang: "en"
category: "function"
name: "getgeneratorstate"
signature: "getgeneratorstate(generator)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getgeneratorstate"
license: "PSF"
updated: "2026-10-01"
---

# getgeneratorstate

Get current state of a generator-iterator.

Possible states are:

* GEN_CREATED: Waiting to start execution.
* GEN_RUNNING: Currently being executed by the interpreter.
* GEN_SUSPENDED: Currently suspended at a yield expression.
* GEN_CLOSED: Execution has completed.

> *Added in 3.2*
