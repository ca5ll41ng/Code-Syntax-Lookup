---
id: "python-en-function-glob-glob"
language: "python"
lang: "en"
category: "function"
name: "glob"
title: "Examples"
directive: "module"
module: "glob"
source_url: "https://docs.python.org/3/library/glob.html#module-glob"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

Consider a directory containing the following files:
`1.gif`, `2.txt`, `card.gif` and a subdirectory `sub`
which contains only the file `3.txt`.  `glob` will produce
the following results.  Notice how any leading components of the path are
preserved. ::

   >>> import glob
   >>> glob.glob('./[0-9].*')
   ['./1.gif', './2.txt']
   >>> glob.glob('*.gif')
   ['1.gif', 'card.gif']
   >>> glob.glob('?.gif')
   ['1.gif']
   >>> glob.glob('**/*.txt', recursive=True)
   ['2.txt', 'sub/3.txt']
   >>> glob.glob('./**/', recursive=True)
   ['./', './sub/']

If the directory contains files starting with `.` they won't be matched by
default. For example, consider a directory containing `card.gif` and
`.card.gif`::

   >>> import glob
   >>> glob.glob('*.gif')
   ['card.gif']
   >>> glob.glob('.c*')
   ['.card.gif']

> **Seealso**
>
> The `fnmatch` module offers shell-style filename (not path) expansion.
>

> **Seealso**
>
> The `pathlib` module offers high-level path objects.
>
