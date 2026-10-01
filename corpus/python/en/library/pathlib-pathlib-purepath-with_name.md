---
id: "python-en-function-pathlib-purepath-with_name"
language: "python"
lang: "en"
category: "function"
name: "PurePath.with_name"
signature: "PurePath.with_name(name)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.with_name"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.with_name

Return a new path with the `name` changed.  If the original path
doesn't have a name, ValueError is raised::

   >>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
   >>> p.with_name('setup.py')
   PureWindowsPath('c:/Downloads/setup.py')
   >>> p = PureWindowsPath('c:/')
   >>> p.with_name('setup.py')
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     File "/home/antoine/cpython/default/Lib/pathlib.py", line 751, in with_name
       raise ValueError("%r has an empty name" % (self,))
   ValueError: PureWindowsPath('c:/') has an empty name
