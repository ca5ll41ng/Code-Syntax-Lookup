---
id: "python-en-function-difflib-differ"
language: "python"
lang: "en"
category: "function"
name: "Differ"
directive: "class"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.Differ"
license: "PSF"
updated: "2026-10-01"
---

# Differ

This is a class for comparing sequences of lines of text, and producing
human-readable differences or deltas.  Differ uses `SequenceMatcher`
both to compare sequences of lines, and to compare sequences of characters
within similar (near-matching) lines.

Each line of a `Differ` delta begins with a two-letter code:

+----------+-------------------------------------------+
 Code      Meaning                                   
+==========+===========================================+
 `'- '`  line unique to sequence 1                 
+----------+-------------------------------------------+
 `'+ '`  line unique to sequence 2                 
+----------+-------------------------------------------+
 `'  '`  line common to both sequences             
+----------+-------------------------------------------+
 `'? '`  line not present in either input sequence |
+----------+-------------------------------------------+

Lines beginning with '`?`' attempt to guide the eye to intraline differences,
and were not present in either input sequence. These lines can be confusing if
the sequences contain whitespace characters, such as spaces, tabs or line breaks.

Note that `Differ`\ -generated deltas make no claim to be **minimal**
diffs. To the contrary, minimal diffs are often counter-intuitive for humans,
because they synch up anywhere possible, sometimes at accidental matches
100 pages apart.
Restricting synch points to contiguous matches preserves some notion of
locality, at the occasional cost of producing a longer diff.

The `Differ` class has this constructor:

method:: __init__(linejunk=None, charjunk=None, autojunk=True)

`Differ` objects are used (deltas generated) via a single method:

method:: Differ.compare(a, b)
