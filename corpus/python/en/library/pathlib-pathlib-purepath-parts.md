---
id: "python-en-function-pathlib-purepath-parts"
language: "python"
lang: "en"
category: "function"
name: "PurePath.parts"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.parts"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.parts

A tuple giving access to the path's various components::

   >>> p = PurePath('/usr/bin/python3')
   >>> p.parts
   ('/', 'usr', 'bin', 'python3')

   >>> p = PureWindowsPath('c:/Program Files/PSF')
   >>> p.parts
   ('c:\\', 'Program Files', 'PSF')

(note how the drive and local root are regrouped in a single part)
