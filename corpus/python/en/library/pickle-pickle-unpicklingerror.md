---
id: "python-en-function-pickle-unpicklingerror"
language: "python"
lang: "en"
category: "function"
name: "UnpicklingError"
directive: "exception"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.UnpicklingError"
license: "PSF"
updated: "2026-10-01"
---

# UnpicklingError

Error raised when there is a problem unpickling an object, such as a data
corruption or a security violation.  It inherits from `PickleError`.

Note that other exceptions may also be raised during unpickling, including
(but not necessarily limited to) AttributeError, EOFError, ImportError, and
IndexError.
