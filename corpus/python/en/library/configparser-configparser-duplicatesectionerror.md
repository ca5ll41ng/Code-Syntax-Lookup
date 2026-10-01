---
id: "python-en-function-configparser-duplicatesectionerror"
language: "python"
lang: "en"
category: "function"
name: "DuplicateSectionError"
directive: "exception"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.DuplicateSectionError"
license: "PSF"
updated: "2026-10-01"
---

# DuplicateSectionError

Exception raised if `~ConfigParser.add_section` is called with the name of a section
that is already present or in strict parsers when a section if found more
than once in a single input file, string or dictionary.

> *Changed in 3.2*: Added the optional *source* and *lineno* attributes and parameters to :meth:`!__init__`.
