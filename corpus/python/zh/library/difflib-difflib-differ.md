---
id: "python-zh-function-difflib-differ"
language: "python"
lang: "zh"
category: "function"
name: "Differ"
directive: "class"
module: "difflib"
source_url: "https://docs.python.org/zh-cn/3/library/difflib.html#difflib.Differ"
license: "PSF"
updated: "2026-10-01"
---

# Differ

This is a class for comparing sequences of lines of text, and producing
human-readable differences or deltas.  Differ uses `SequenceMatcher`
both to compare sequences of lines, and to compare sequences of characters
within similar (near-matching) lines.

:class:`Differ` 增量的每一行均以双字母代码打头：

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

:class:`Differ` 类具有这样的构造器：

method:: __init__(linejunk=None, charjunk=None, autojunk=True)

:class:`Differ` 对象是通过一个单独方法来使用（生成增量）的：

method:: Differ.compare(a, b)
