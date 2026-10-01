---
id: "python-en-function-email-errors-missingheaderbodyseparatordefect"
language: "python"
lang: "en"
category: "function"
name: "MissingHeaderBodySeparatorDefect"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.MissingHeaderBodySeparatorDefect"
license: "PSF"
updated: "2026-10-01"
---

# MissingHeaderBodySeparatorDefect

A line was found while parsing headers that had no leading white space but
contained no ':'.  Parsing continues assuming that the line represents the
first line of the body.

> *Added in 3.3*
