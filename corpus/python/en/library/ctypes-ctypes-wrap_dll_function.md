---
id: "python-en-function-ctypes-wrap_dll_function"
language: "python"
lang: "en"
category: "function"
name: "wrap_dll_function"
signature: "wrap_dll_function(dll)"
directive: "decorator"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.wrap_dll_function"
license: "PSF"
updated: "2026-10-01"
---

# wrap_dll_function

A `decorator` that generates `~ctypes._CFuncPtr.argtypes` and
`~ctypes._CFuncPtr.restype` from a function signature, using the
`~function.__name__` of the function and its `type annotations`.

The decorated function should look like this::

   @wrap_dll_function(dll_to_wrap)
   def function_ptr_name(arg_name: ctypes_type, ...) -> ctypes_type:
       """Optional docstring. There should be no function body."""

The body of the decorated function is ignored, and any parameters that are
missing type annotations are skipped. The names of the parameters are ignored
and do not have to match the underlying C implementation.

If the decorated function does not have a return type annotation, a
`ValueError` is raised. A `ValueError` is also raised if it has a
keyword-only, `*args`, or `**kwargs` parameter, since
`~ctypes._CFuncPtr.argtypes` describes positional arguments only. If
the name of the function does not exist in *dll*, an `AttributeError`
is raised.

For example::

   import ctypes
   from ctypes.util import wrap_dll_function

   @wrap_dll_function(ctypes.pythonapi)
   def PyObject_GetAttrString(op: ctypes.py_object, attr: ctypes.c_char_p) -> ctypes.py_object:
       pass

   PyObject_GetAttrString(42, b"real")

> *Added in next*
