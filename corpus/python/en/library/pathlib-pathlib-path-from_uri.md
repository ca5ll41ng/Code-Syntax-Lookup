---
id: "python-en-function-pathlib-path-from_uri"
language: "python"
lang: "en"
category: "function"
name: "Path.from_uri"
signature: "Path.from_uri(uri)"
directive: "classmethod"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.from_uri"
license: "PSF"
updated: "2026-10-01"
---

# Path.from_uri

Return a new path object from parsing a 'file' URI. For example::

   >>> p = Path.from_uri('file:///etc/hosts')
   PosixPath('/etc/hosts')

On Windows, DOS device and UNC paths may be parsed from URIs::

   >>> p = Path.from_uri('file:///c:/windows')
   WindowsPath('c:/windows')
   >>> p = Path.from_uri('file://server/share')
   WindowsPath('//server/share')

Several variant forms are supported::

   >>> p = Path.from_uri('file:////server/share')
   WindowsPath('//server/share')
   >>> p = Path.from_uri('file://///server/share')
   WindowsPath('//server/share')
   >>> p = Path.from_uri('file:c:/windows')
   WindowsPath('c:/windows')
   >>> p = Path.from_uri('file:/c|/windows')
   WindowsPath('c:/windows')

`ValueError` is raised if the URI does not start with `file:`, or
the parsed path isn't absolute.

> *Added in 3.13*

> *Changed in 3.14*: The URL authority is discarded if it matches the local hostname. Otherwise, if the authority isn't empty or ``localhost``, then on Windows a UNC path is returned (as before), and on other platforms a :exc:`ValueError` is raised.
