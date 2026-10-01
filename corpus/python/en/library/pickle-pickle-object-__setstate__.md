---
id: "python-en-function-pickle-object-__setstate__"
language: "python"
lang: "en"
category: "function"
name: "object.__setstate__"
signature: "object.__setstate__(state)"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__setstate__"
license: "PSF"
updated: "2026-10-01"
---

# object.__setstate__

Upon unpickling, if the class defines `__setstate__`, it is called with
the unpickled state.  In that case, there is no requirement for the state
object to be a dictionary.  Otherwise, the pickled state must be a dictionary
and its items are assigned to the new instance's dictionary.

> **Note**
>
> If `__reduce__` returns a state with value `None` at pickling,
> the `__setstate__` method will not be called upon unpickling.
>
