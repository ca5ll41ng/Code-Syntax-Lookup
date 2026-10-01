---
id: "python-en-function-runpy-run_module"
language: "python"
lang: "en"
category: "function"
name: "run_module"
signature: "run_module(mod_name, init_globals=None, run_name=None, alter_sys=False)"
directive: "function"
module: "runpy"
source_url: "https://docs.python.org/3/library/runpy.html#runpy.run_module"
license: "PSF"
updated: "2026-10-01"
---

# run_module

Execute the code of the specified module and return the resulting module's
globals dictionary. The module's code is first located using the standard
import mechanism (refer to PEP 302 for details) and then executed in a
fresh module namespace.

The *mod_name* argument should be an absolute module name.
If the module name refers to a package rather than a normal
module, then that package is imported and the `__main__` submodule within
that package is then executed and the resulting module globals dictionary
returned.

The optional dictionary argument *init_globals* may be used to pre-populate
the module's globals dictionary before the code is executed.
*init_globals* will not be modified. If any of the special global variables
below are defined in *init_globals*, those definitions are
overridden by `run_module`.

The special global variables `__name__`, `__spec__`, `__file__`,
`__loader__` and `__package__` are set in the globals dictionary before
the module code is executed. (Note that this is a minimal set of variables -
other variables may be set implicitly as an interpreter implementation
detail.)

`__name__` is set to *run_name* if this optional argument is not
`None`, to `mod_name + '.__main__'` if the named module is a
package and to the *mod_name* argument otherwise.

`__spec__` will be set appropriately for the *actually* imported
module (that is, `__spec__.name` will always be *mod_name* or
`mod_name + '.__main__'`, never *run_name*).

`__file__`, `__loader__` and `__package__` are
`set as normal` based on the module spec.

If the argument *alter_sys* is supplied and evaluates to `True`,
then `sys.argv[0]` is updated with the value of `__file__` and
`sys.modules[__name__]` is updated with a temporary module object for the
module being executed. Both `sys.argv[0]` and `sys.modules[__name__]`
are restored to their original values before the function returns.

Note that this manipulation of `sys` is not thread-safe. Other threads
may see the partially initialised module, as well as the altered list of
arguments. It is recommended that the `sys` module be left alone when
invoking this function from threaded code.

> **Seealso**
>
> The `-m` option offering equivalent functionality from the
> command line.
>

> *Changed in 3.1*: Added ability to execute packages by looking for a :mod:`__main__` submodule.

> *Changed in 3.2*: Added ``__cached__`` global variable (see :pep:`3147`).

> *Changed in 3.4*: Updated to take advantage of the module spec feature added by :pep:`451`. This allows ``__cached__`` to be set correctly for modules run this way, as well as ensuring the real module name is always accessible as ``__spec__.name``.

> *Changed in 3.12*: The setting of ``__cached__``, ``__loader__``, and ``__package__`` are deprecated. See :class:`~importlib.machinery.ModuleSpec` for alternatives.

> *Changed in 3.15*: The global variable ``__cached__`` is no longer set.
