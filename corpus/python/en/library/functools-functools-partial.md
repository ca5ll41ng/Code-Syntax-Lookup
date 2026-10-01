---
id: "python-en-function-functools-partial"
language: "python"
lang: "en"
category: "function"
name: "partial"
signature: "partial(func, /, *args, **keywords)"
directive: "function"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#functools.partial"
license: "PSF"
updated: "2026-10-01"
---

# partial

Return a new `partial object` which when called
will behave like *func* called with the positional arguments *args*
and keyword arguments *keywords*. If more arguments are supplied to the
call, they are appended to *args*. If additional keyword arguments are
supplied, they extend and override *keywords*.
Roughly equivalent to::

   def partial(func, /, *args, **keywords):
       def newfunc(*more_args, **more_keywords):
           return func(*args, *more_args, **(keywords | more_keywords))
       newfunc.func = func
       newfunc.args = args
       newfunc.keywords = keywords
       return newfunc

The `partial` function is used for partial function application which "freezes"
some portion of a function's arguments and/or keywords resulting in a new object
with a simplified signature.  For example, `partial` can be used to create
a callable that behaves like the `int` function where the *base* argument
defaults to `2`:

```python

>>> basetwo = partial(int, base=2)
>>> basetwo.__doc__ = 'Convert base 2 string to an int.'
>>> basetwo('10010')
18
```

If `Placeholder` sentinels are present in *args*, they will be filled first
when `partial` is called. This makes it possible to pre-fill any positional
argument with a call to `partial`; without `Placeholder`,
only the chosen number of leading positional arguments can be pre-filled.

If any `Placeholder` sentinels are present, all must be filled at call time:

```python

>>> say_to_world = partial(print, Placeholder, Placeholder, "world!")
>>> say_to_world('Hello', 'dear')
Hello dear world!
```

Calling `say_to_world('Hello')` raises a `TypeError`, because
only one positional argument is provided, but there are two placeholders
that must be filled in.

If `partial` is applied to an existing
`partial object`, `Placeholder` sentinels of the
input object are filled in with new positional arguments.
A placeholder can be retained by inserting a new
`Placeholder` sentinel to the place held by a previous `Placeholder`:

```python

>>> from functools import partial, Placeholder as _
>>> remove = partial(str.replace, _, _, '')
>>> message = 'Hello, dear dear world!'
>>> remove(message, ' dear')
'Hello, world!'
>>> remove_dear = partial(remove, _, ' dear')
>>> remove_dear(message)
'Hello, world!'
>>> remove_first_dear = partial(remove_dear, _, 1)
>>> remove_first_dear(message)
'Hello, dear world!'
```

`Placeholder` cannot be passed to `partial` as a keyword argument.

> *Changed in 3.14*: Added support for :data:`Placeholder` in positional arguments.
