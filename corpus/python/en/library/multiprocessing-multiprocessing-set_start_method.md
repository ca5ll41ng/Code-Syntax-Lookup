---
id: "python-en-function-multiprocessing-set_start_method"
language: "python"
lang: "en"
category: "function"
name: "set_start_method"
signature: "set_start_method(method, force=False)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.set_start_method"
license: "PSF"
updated: "2026-10-01"
---

# set_start_method

Set the method which should be used to start child processes.
The *method* argument can be `'fork'`, `'spawn'` or `'forkserver'`.
Raises `RuntimeError` if the start method has already been set and *force*
is not `True`.  If *method* is `None` and *force* is `True` then the start
method is set to `None`.  If *method* is `None` and *force* is `False`
then the context is set to the default context.

Note that this should be called at most once, and it should be
protected inside the `if __name__ == '__main__'` clause of the
main module.

See `multiprocessing-start-methods`.

> *Added in 3.4*
