---
id: "python-en-function-os-path-splitext"
language: "python"
lang: "en"
category: "function"
name: "splitext"
signature: "splitext(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.splitext"
license: "PSF"
updated: "2026-10-01"
---

# splitext

Split the pathname *path* into a pair `(root, ext)`  such that `root + ext ==
path`, and the extension, *ext*, is empty or begins with a period and contains at
most one period.

If the path contains no extension, *ext* will be `''`::

   >>> splitext('bar')
   ('bar', '')

If the path contains an extension, then *ext* will be set to this extension,
including the leading period. Note that previous periods will be ignored::

   >>> splitext('foo.bar.exe')
   ('foo.bar', '.exe')
   >>> splitext('/foo/bar.exe')
   ('/foo/bar', '.exe')

Leading periods of the last component of the path are considered to
be part of the root::

   >>> splitext('.cshrc')
   ('.cshrc', '')
   >>> splitext('/foo/....jpg')
   ('/foo/....jpg', '')

> *Changed in 3.6*: Accepts a :term:`path-like object`.
