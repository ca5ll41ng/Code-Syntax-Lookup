---
id: "python-en-function-enum-unique"
language: "python"
lang: "en"
category: "function"
name: "unique"
directive: "decorator"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.unique"
license: "PSF"
updated: "2026-10-01"
---

# unique

A `class` decorator specifically for enumerations.  It searches an
enumeration's `~EnumType.__members__`, gathering any aliases it finds; if any are
found `ValueError` is raised with the details::

   >>> from enum import Enum, unique
   >>> @unique
   ... class Mistake(Enum):
   ...     ONE = 1
   ...     TWO = 2
   ...     THREE = 3
   ...     FOUR = 3
   ...
   Traceback (most recent call last):
   ...
   ValueError: duplicate values found in <enum 'Mistake'>: FOUR -> THREE
