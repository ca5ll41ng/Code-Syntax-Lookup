---
id: "python-en-function-pathlib-purepath-with_segments"
language: "python"
lang: "en"
category: "function"
name: "PurePath.with_segments"
signature: "PurePath.with_segments(*pathsegments)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.with_segments"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.with_segments

Create a new path object of the same type by combining the given
*pathsegments*. This method is called whenever a derivative path is created,
such as from `parent` and `relative_to`. Subclasses may
override this method to pass information to derivative paths, for example::

   from pathlib import PurePosixPath

   class MyPath(PurePosixPath):
       def __init__(self, *pathsegments, session_id):
           super().__init__(*pathsegments)
           self.session_id = session_id

       def with_segments(self, *pathsegments):
           return type(self)(*pathsegments, session_id=self.session_id)

   etc = MyPath('/etc', session_id=42)
   hosts = etc / 'hosts'
   print(hosts.session_id)  # 42

> *Added in 3.12*
