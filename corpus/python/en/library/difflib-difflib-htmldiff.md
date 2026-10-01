---
id: "python-en-function-difflib-htmldiff"
language: "python"
lang: "en"
category: "function"
name: "HtmlDiff"
directive: "class"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.HtmlDiff"
license: "PSF"
updated: "2026-10-01"
---

# HtmlDiff

This class can be used to create an HTML table (or a complete HTML file
containing the table) showing a side by side, line by line comparison of text
with inter-line and intra-line change highlights.  The table can be generated in
either full or contextual difference mode.

> **Warning**
>
> The trailing newlines get stripped before the diff, so the result can be
> incomplete. See `71896` for details.
>

The constructor for this class is:

method:: __init__(tabsize=8, wrapcolumn=None, linejunk=None, charjunk=IS_CHARACTER_JUNK, *, autojunk=True)

The following methods are public:

method:: make_file(fromlines, tolines, fromdesc='', todesc='', context=False, \

method:: make_table(fromlines, tolines, fromdesc='', todesc='', context=False, numlines=5)
