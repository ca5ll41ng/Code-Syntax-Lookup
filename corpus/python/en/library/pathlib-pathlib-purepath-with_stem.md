---
id: "python-en-function-pathlib-purepath-with_stem"
language: "python"
lang: "en"
category: "function"
name: "PurePath.with_stem"
signature: "PurePath.with_stem(stem)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.with_stem"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.with_stem

Return a new path with the `stem` changed.  If the original path
doesn't have a name, ValueError is raised::

   >>> p = PureWindowsPath('c:/Downloads/draft.txt')
   >>> p.with_stem('final')
   PureWindowsPath('c:/Downloads/final.txt')
   >>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
   >>> p.with_stem('lib')
   PureWindowsPath('c:/Downloads/lib.gz')
   >>> p = PureWindowsPath('c:/')
   >>> p.with_stem('')
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     File "/home/antoine/cpython/default/Lib/pathlib.py", line 861, in with_stem
       return self.with_name(stem + self.suffix)
     File "/home/antoine/cpython/default/Lib/pathlib.py", line 851, in with_name
       raise ValueError("%r has an empty name" % (self,))
   ValueError: PureWindowsPath('c:/') has an empty name

> *Added in 3.9*
