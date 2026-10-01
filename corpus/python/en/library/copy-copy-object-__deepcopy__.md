---
id: "python-en-function-copy-object-__deepcopy__"
language: "python"
lang: "en"
category: "function"
name: "object.__deepcopy__"
signature: "object.__deepcopy__(self, memo)"
directive: "method"
module: "copy"
source_url: "https://docs.python.org/3/library/copy.html#copy.object.__deepcopy__"
license: "PSF"
updated: "2026-10-01"
---

# object.__deepcopy__

Called to implement the deep copy operation; it is passed one
argument, the *memo* dictionary.  If the `__deepcopy__` implementation needs
to make a deep copy of a component, it should call the `~copy.deepcopy` function
with the component as first argument and the *memo* dictionary as second argument.
The *memo* dictionary should be treated as an opaque object.
