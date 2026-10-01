---
id: "python-en-function-builtins-pendingdeprecationwarning"
language: "python"
lang: "en"
category: "function"
name: "PendingDeprecationWarning"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#PendingDeprecationWarning"
license: "PSF"
updated: "2026-10-01"
---

# PendingDeprecationWarning

Base class for warnings about features which are obsolete and
expected to be deprecated in the future, but are not deprecated
at the moment.

This class is rarely used as emitting a warning about a possible
upcoming deprecation is unusual, and `DeprecationWarning`
is preferred for already active deprecations.

Ignored by the default warning filters. Enabling the `Python
Development Mode` shows this warning.

The deprecation policy is described in PEP 387.
