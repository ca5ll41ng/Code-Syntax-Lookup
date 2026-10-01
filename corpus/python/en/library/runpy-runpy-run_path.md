---
id: "python-en-function-runpy-run_path"
language: "python"
lang: "en"
category: "function"
name: "run_path"
signature: "run_path(path_name, init_globals=None, run_name=None)"
directive: "function"
module: "runpy"
source_url: "https://docs.python.org/3/library/runpy.html#runpy.run_path"
license: "PSF"
updated: "2026-10-01"
---

# run_path

Execute the code at the named filesystem location and return the resulting
module's globals dictionary. As with a script name supplied to the CPython
command line, *path_name* may refer to a Python source file, a
compiled bytecode file or a valid `sys.path` entry containing a
`__main__` module
(e.g. a zipfile containing a top-level `__main__.py` file).

For a simple script, the specified code is simply executed in a fresh
module namespace. For a valid `sys.path` entry (typically a zipfile or
directory), the entry is first added to the beginning of `sys.path`. The
function then looks for and executes a `__main__` module using the
updated path. Note that there is no special protection against invoking
an existing `__main__` entry located elsewhere on `sys.path` if
there is no such module at the specified location.

The optional dictionary argument *init_globals* may be used to pre-populate
the module's globals dictionary before the code is executed.
*init_globals* will not be modified. If any of the special global variables
below are defined in *init_globals*, those definitions are
overridden by `run_path`.

The special global variables `__name__`, `__spec__`, `__file__`,
`__loader__` and `__package__` are set in the globals dictionary before
the module code is executed. (Note that this is a minimal set of variables -
other variables may be set implicitly as an interpreter implementation
detail.)

`__name__` is set to *run_name* if this optional argument is not
`None` and to `'<run_path>'` otherwise.

If *path_name* directly references a script file (whether as source
or as precompiled byte code), then `__file__` will be set to
*path_name*, and `__spec__`, `__loader__` and
`__package__` will all be set to `None`.

If *path_name* is a reference to a valid `sys.path` entry, then
`__spec__` will be set appropriately for the imported `__main__`
module (that is, `__spec__.name` will always be `__main__`).
`__file__`, `__loader__` and `__package__` will be
`set as normal` based on the module spec.

A number of alterations are also made to the `sys` module. Firstly,
`sys.path` may be altered as described above. `sys.argv[0]` is updated
with the value of *path_name* and `sys.modules[__name__]` is updated
with a temporary module object for the module being executed. All
modifications to items in `sys` are reverted before the function
returns.

Note that, unlike `run_module`, the alterations made to `sys`
are not optional in this function as these adjustments are essential to
allowing the execution of `sys.path` entries. As the thread-safety
limitations still apply, use of this function in threaded code should be
either serialised with the import lock or delegated to a separate process.

> **Seealso**
>
> `using-on-interface-options` for equivalent functionality on the
> command line (`python path/to/script`).
>

> *Added in 3.2*

> *Changed in 3.4*: Updated to take advantage of the module spec feature added by :pep:`451`. This allows ``__cached__`` to be set correctly in the case where ``__main__`` is imported from a valid :data:`sys.path` entry rather than being executed directly.

> *Changed in 3.12*: The setting of ``__cached__``, ``__loader__``, and ``__package__`` are deprecated.

> *Changed in 3.15*: The global variable ``__cached__`` is no longer set.
