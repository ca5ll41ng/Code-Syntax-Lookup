---
id: "python-en-function-codecs-incrementalencoder"
language: "python"
lang: "en"
category: "function"
name: "IncrementalEncoder"
signature: "IncrementalEncoder(errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.IncrementalEncoder"
license: "PSF"
updated: "2026-10-01"
---

# IncrementalEncoder

Constructor for an `IncrementalEncoder` instance.

All incremental encoders must provide this constructor interface. They are free
to add additional keyword arguments, but only the ones defined here are used by
the Python codec registry.

The `IncrementalEncoder` may implement different error handling schemes
by providing the *errors* keyword argument. See `error-handlers` for
possible values.

The *errors* argument will be assigned to an attribute of the same name.
Assigning to this attribute makes it possible to switch between different error
handling strategies during the lifetime of the `IncrementalEncoder`
object.

method:: encode(object, final=False)

method:: reset()

method:: getstate()

method:: setstate(state)
