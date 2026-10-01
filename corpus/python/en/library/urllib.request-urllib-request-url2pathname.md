---
id: "python-en-function-urllib-request-url2pathname"
language: "python"
lang: "en"
category: "function"
name: "url2pathname"
signature: "url2pathname(url, *, require_scheme=False, resolve_host=False)"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.url2pathname"
license: "PSF"
updated: "2026-10-01"
---

# url2pathname

Convert the given `file:` URL to a local path. This function uses
`~urllib.parse.unquote` to decode the URL.

If *require_scheme* is false (the default), the given value should omit a
`file:` scheme prefix. If *require_scheme* is set to true, the given
value should include the prefix; a `~urllib.error.URLError` is raised
if it doesn't.

The URL authority is discarded if it is empty, `localhost`, or the local
hostname. Otherwise, if *resolve_host* is set to true, the authority is
resolved using `socket.gethostbyname` and discarded if it matches a
local IP address (as per RFC RFC 8089 §3 <8089#section-3>). If the
authority is still unhandled, then on Windows a UNC path is returned, and
on other platforms a `~urllib.error.URLError` is raised.

This example shows the function being used on Windows::

   >>> from urllib.request import url2pathname
   >>> url = 'file:///C:/Program%20Files'
   >>> url2pathname(url, require_scheme=True)
   'C:\\Program Files'

> *Changed in 3.14*: Windows drive letters are no longer converted to uppercase, and ``:`` characters not following a drive letter no longer cause an :exc:`OSError` exception to be raised on Windows.

> *Changed in 3.14*: The URL authority is discarded if it matches the local hostname. Otherwise, if the authority isn't empty or ``localhost``, then on Windows a UNC path is returned (as before), and on other platforms a :exc:`~urllib.error.URLError` is raised.

> *Changed in 3.14*: The URL query and fragment components are discarded if present.

> *Changed in 3.14*: The *require_scheme* and *resolve_host* parameters were added.
