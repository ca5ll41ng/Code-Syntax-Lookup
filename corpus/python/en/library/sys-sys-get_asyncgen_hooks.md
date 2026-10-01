---
id: "python-en-function-sys-get_asyncgen_hooks"
language: "python"
lang: "en"
category: "function"
name: "get_asyncgen_hooks"
signature: "get_asyncgen_hooks()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.get_asyncgen_hooks"
license: "PSF"
updated: "2026-10-01"
---

# get_asyncgen_hooks

Returns an *asyncgen_hooks* object, which is similar to a
`~collections.namedtuple` of the form `(firstiter, finalizer)`,
where *firstiter* and *finalizer* are expected to be either `None` or
functions which take an `asynchronous generator iterator` as an
argument, and are used to schedule finalization of an asynchronous
generator by an event loop.

> *Added in 3.6*: See :pep:`525` for more details.

> **Note**
>
> This function has been added on a provisional basis (see PEP 411
> for details.)
>
