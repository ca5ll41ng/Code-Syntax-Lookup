---
id: "python-en-function-wsgiref-headers"
language: "python"
lang: "en"
category: "function"
name: "Headers"
signature: "Headers([headers])"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.Headers"
license: "PSF"
updated: "2026-10-01"
---

# Headers

Create a mapping-like object wrapping *headers*, which must be a list of header
name/value tuples as described in PEP 3333. The default value of *headers* is
an empty list.

`Headers` objects support typical mapping operations including
`~object.__getitem__`, `~dict.get`, `~object.__setitem__`,
`~dict.setdefault`,
`~object.__delitem__` and `~object.__contains__`.  For each of
these methods, the key is the header name (treated case-insensitively), and the
value is the first value associated with that header name.  Setting a header
deletes any existing values for that header, then adds a new value at the end of
the wrapped header list.  Headers' existing order is generally maintained, with
new headers added to the end of the wrapped list.

Unlike a dictionary, `Headers` objects do not raise an error when you try
to get or delete a key that isn't in the wrapped header list. Getting a
nonexistent header just returns `None`, and deleting a nonexistent header does
nothing.

`Headers` objects also support `keys`, `values`, and
`items` methods.  The lists returned by `keys` and `items` can
include the same key more than once if there is a multi-valued header.  The
`len()` of a `Headers` object is the same as the length of its
`items`, which is the same as the length of the wrapped header list.  In
fact, the `items` method just returns a copy of the wrapped header list.

Calling `bytes()` on a `Headers` object returns a formatted bytestring
suitable for transmission as HTTP response headers.  Each header is placed on a
line with its value, separated by a colon and a space. Each line is terminated
by a carriage return and line feed, and the bytestring is terminated with a
blank line.

In addition to their mapping interface and formatting features, `Headers`
objects also have the following methods for querying and adding multi-valued
headers, and for adding headers with MIME parameters:

method:: Headers.get_all(name)

method:: Headers.add_header(name, value, **_params)

> *Changed in 3.5*: *headers* parameter is optional.
