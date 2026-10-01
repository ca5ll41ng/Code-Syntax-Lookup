---
id: "python-en-function-configparser-duplicateoptionerror"
language: "python"
lang: "en"
category: "function"
name: "DuplicateOptionError"
directive: "exception"
module: "configparser"
source_url: "https://docs.python.org/3/library/configparser.html#configparser.DuplicateOptionError"
license: "PSF"
updated: "2026-10-01"
---

# DuplicateOptionError

Exception raised by strict parsers if a single option appears twice during
reading from a single file, string or dictionary. This catches misspellings
and case sensitivity-related errors, e.g. a dictionary may have two keys
representing the same case-insensitive configuration key.
