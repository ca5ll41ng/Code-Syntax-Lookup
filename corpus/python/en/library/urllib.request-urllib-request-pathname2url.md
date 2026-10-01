---
id: "python-en-function-urllib-request-pathname2url"
language: "python"
lang: "en"
category: "function"
name: "pathname2url"
signature: "pathname2url(path, *, add_scheme=False)"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.pathname2url"
license: "PSF"
updated: "2026-10-01"
---

# pathname2url

Convert the given local path to a `file:` URL. This function uses
`~urllib.parse.quote` function to encode the path.

If *add_scheme* is false (the default), the return value omits the
`file:` scheme prefix. Set *add_scheme* to true to return a complete URL.

This example shows the function being used on Windows::

   >>> from urllib.request import pathname2url
   >>> path = 'C:\\Program Files'
   >>> pathname2url(path, add_scheme=True)
   'file:///C:/Program%20Files'

> *Changed in 3.14*: Windows drive letters are no longer converted to uppercase, and ``:`` characters not following a drive letter no longer cause an :exc:`OSError` exception to be raised on Windows.

> *Changed in 3.14*: Paths beginning with a slash are converted to URLs with authority sections. For example, the path ``/etc/hosts`` is converted to the URL ``///etc/hosts``.

> *Changed in 3.14*: The *add_scheme* parameter was added.
