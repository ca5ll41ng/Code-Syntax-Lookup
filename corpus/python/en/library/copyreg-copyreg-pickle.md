---
id: "python-en-function-copyreg-pickle"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B403"],"cwe":["CWE-502"],"note":"Consider possible security implications associated with {name} module."}
name: "pickle"
signature: "pickle(type, function, constructor_ob=None)"
directive: "function"
module: "copyreg"
source_url: "https://docs.python.org/3/library/copyreg.html#copyreg.pickle"
license: "PSF"
updated: "2026-10-01"
---

# pickle

Declares that *function* should be used as a "reduction" function for objects
of type *type*.  *function* must return either a string or a tuple
containing between two and six elements. See the `~pickle.Pickler.dispatch_table`
for more details on the interface of *function*.

The *constructor_ob* parameter is a legacy feature and is now ignored, but if
passed it must be a callable.

Note that the `~pickle.Pickler.dispatch_table` attribute of a pickler
object or subclass of `pickle.Pickler` can also be used for
declaring reduction functions.
