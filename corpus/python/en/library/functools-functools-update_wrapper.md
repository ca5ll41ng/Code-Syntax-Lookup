---
id: "python-en-function-functools-update_wrapper"
language: "python"
lang: "en"
category: "function"
name: "update_wrapper"
signature: "update_wrapper(wrapper, wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)"
directive: "function"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#functools.update_wrapper"
license: "PSF"
updated: "2026-10-01"
---

# update_wrapper

Update a *wrapper* function to look like the *wrapped* function. The optional
arguments are tuples to specify which attributes of the original function are
assigned directly to the matching attributes on the wrapper function and which
attributes of the wrapper function are updated with the corresponding attributes
from the original function. The default values for these arguments are the
module level constants `WRAPPER_ASSIGNMENTS` (which assigns to the wrapper
function's `~function.__module__`, `~function.__name__`,
`~function.__qualname__`, `~function.__annotations__`,
`~function.__type_params__`, and `~function.__doc__`, the
documentation string) and `WRAPPER_UPDATES` (which updates the wrapper
function's `~function.__dict__`, i.e. the instance dictionary).

To allow access to the original function for introspection and other purposes
(e.g. bypassing a caching decorator such as `lru_cache`), this function
automatically adds a `__wrapped__` attribute to the wrapper that refers to
the function being wrapped.

The main intended use for this function is in `decorator` functions which
wrap the decorated function and return the wrapper. If the wrapper function is
not updated, the metadata of the returned function will reflect the wrapper
definition rather than the original function definition, which is typically less
than helpful.

`update_wrapper` may be used with callables other than functions. Any
attributes named in *assigned* or *updated* that are missing from the object
being wrapped are ignored (i.e. this function will not attempt to set them
on the wrapper function). `AttributeError` is still raised if the
wrapper function itself is missing any attributes named in *updated*.

> *Changed in 3.2*: The ``__wrapped__`` attribute is now automatically added. The :attr:`~function.__annotations__` attribute is now copied by default. Missing attributes no longer trigger an :exc:`AttributeError`.

> *Changed in 3.4*: The ``__wrapped__`` attribute now always refers to the wrapped function, even if that function defined a ``__wrapped__`` attribute. (see :issue:`17482`)

> *Changed in 3.12*: The :attr:`~function.__type_params__` attribute is now copied by default.
