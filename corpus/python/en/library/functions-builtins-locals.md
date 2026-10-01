---
id: "python-en-function-builtins-locals"
language: "python"
lang: "en"
category: "function"
name: "locals"
signature: "locals()"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#locals"
license: "PSF"
updated: "2026-10-01"
---

# locals

Return a mapping object representing the current local symbol table, with
variable names as the keys, and their currently bound references as the
values.

At module scope, as well as when using `exec` or `eval` with
a single namespace, this function returns the same namespace as
`globals`.

At class scope, it returns the namespace that will be passed to the
metaclass constructor.

When using `exec()` or `eval()` with separate local and global
arguments, it returns the local namespace passed in to the function call.

In all of the above cases, each call to `locals()` in a given frame of
execution will return the *same* mapping object. Changes made through
the mapping object returned from `locals()` will be visible as assigned,
reassigned, or deleted local variables, and assigning, reassigning, or
deleting local variables will immediately affect the contents of the
returned mapping object.

In an `optimized scope` (including functions, generators, and
coroutines), each call to `locals()` instead returns a fresh dictionary
containing the current bindings of the function's local variables and any
nonlocal cell references. In this case, name binding changes made via the
returned dict are *not* written back to the corresponding local variables
or nonlocal cell references, and assigning, reassigning, or deleting local
variables and nonlocal cell references does *not* affect the contents
of previously returned dictionaries.

Calling `locals()` as part of a comprehension in a function, generator, or
coroutine is equivalent to calling it in the containing scope, except that
the comprehension's initialised iteration variables will be included. In
other scopes, it behaves as if the comprehension were running as a nested
function.

Calling `locals()` as part of a generator expression is equivalent to
calling it in a nested generator function.

> *Changed in 3.12*: The behaviour of ``locals()`` in a comprehension has been updated as described in :pep:`709`.

> *Changed in 3.13*: As part of :pep:`667`, the semantics of mutating the mapping objects returned from this function are now defined. The behavior in :term:`optimized scopes <optimized scope>` is now as described above. Aside from being defined, the behaviour in other scopes remains unchanged from previous versions.
