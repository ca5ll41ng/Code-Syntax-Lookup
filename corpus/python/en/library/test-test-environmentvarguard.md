---
id: "python-en-function-test-environmentvarguard"
language: "python"
lang: "en"
category: "function"
name: "EnvironmentVarGuard"
signature: "EnvironmentVarGuard()"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.EnvironmentVarGuard"
license: "PSF"
updated: "2026-10-01"
---

# EnvironmentVarGuard

Class used to temporarily set or unset environment variables.  Instances can
be used as a context manager and have a complete dictionary interface for
querying/modifying the underlying `os.environ`. After exit from the
context manager all changes to environment variables done through this
instance will be rolled back.

> *Changed in 3.1*: Added dictionary interface.
