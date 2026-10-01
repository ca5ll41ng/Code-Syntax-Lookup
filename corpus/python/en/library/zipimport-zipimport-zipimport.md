---
id: "python-en-function-zipimport-zipimport"
language: "python"
lang: "en"
category: "function"
name: "zipimport"
title: "Examples"
directive: "module"
module: "zipimport"
source_url: "https://docs.python.org/3/library/zipimport.html#module-zipimport"
license: "PSF"
updated: "2026-10-01"
---

# Examples

.. _zipimport-examples:

**Examples**

Here is an example that imports a module from a ZIP archive - note that the
`zipimport` module is not explicitly used.

```shell-session

$ unzip -l example_archive.zip
Archive:  example_archive.zip
  Length     Date   Time    Name
 --------    ----   ----    ----
     8467  01-01-00 12:30   example.py
 --------                   -------
     8467                   1 file
```

```pycon

>>> import sys
>>> # Add the archive to the front of the module search path
>>> sys.path.insert(0, 'example_archive.zip')
>>> import example
>>> example.__file__
'example_archive.zip/example.py'
```
