---
id: "python-en-function-copyreg-copyreg"
language: "python"
lang: "en"
category: "function"
name: "copyreg"
title: "Example"
directive: "module"
module: "copyreg"
source_url: "https://docs.python.org/3/library/copyreg.html#module-copyreg"
license: "PSF"
updated: "2026-10-01"
---

# Example

**Example**

The example below would like to show how to register a pickle function and how
it will be used:

   >>> import copyreg, copy, pickle
   >>> class C:
   ...     def __init__(self, a):
   ...         self.a = a
   ...
   >>> def pickle_c(c):
   ...     print("pickling a C instance...")
   ...     return C, (c.a,)
   ...
   >>> copyreg.pickle(C, pickle_c)
   >>> c = C(1)
   >>> d = copy.copy(c)  # doctest: +SKIP
   pickling a C instance...
   >>> p = pickle.dumps(c)  # doctest: +SKIP
   pickling a C instance...
