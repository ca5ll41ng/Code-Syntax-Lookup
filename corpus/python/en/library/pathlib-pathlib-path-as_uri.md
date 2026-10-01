---
id: "python-en-function-pathlib-path-as_uri"
language: "python"
lang: "en"
category: "function"
name: "Path.as_uri"
signature: "Path.as_uri()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.as_uri"
license: "PSF"
updated: "2026-10-01"
---

# Path.as_uri

Represent the path as a 'file' URI.  `ValueError` is raised if
the path isn't absolute.

```pycon

>>> p = PosixPath('/etc/passwd')
>>> p.as_uri()
'file:///etc/passwd'
>>> p = WindowsPath('c:/Windows')
>>> p.as_uri()
'file:///c:/Windows'
```

deprecated-removed:: 3.14 3.19
