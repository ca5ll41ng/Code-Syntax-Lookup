---
id: "python-zh-function-difflib-unified_diff"
language: "python"
lang: "zh"
category: "function"
name: "unified_diff"
signature: "unified_diff(a, b, fromfile='', tofile='', fromfiledate='', tofiledate='', n=3, lineterm='\\n', *, autojunk=True, color=False)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/zh-cn/3/library/difflib.html#difflib.unified_diff"
license: "PSF"
updated: "2026-10-01"
---

# unified_diff

Compare *a* and *b* (lists of strings); return a delta (a `generator`
generating the delta lines) in unified diff format.

Unified diffs are a compact way of showing just the lines that have changed plus
a few lines of context.  The changes are shown in an inline style (instead of
separate before/after blocks).  The number of context lines is set by *n* which
defaults to three.

By default, the diff control lines (those with `---`, `+++`, or `@@`) are
created with a trailing newline.  This is helpful so that inputs created from
`io.IOBase.readlines` result in diffs that are suitable for use with
`io.IOBase.writelines` since both the inputs and outputs have trailing
newlines.

For inputs that do not have trailing newlines, set the *lineterm* argument to
`""` so that the output will be uniformly newline free.

Set *color* to `True` to enable output in color, similar to
`git diff --color`. Even if enabled, it can be
`controlled using environment variables`.

The unified diff format normally has a header for filenames and modification
times.  Any or all of these may be specified using strings for *fromfile*,
*tofile*, *fromfiledate*, and *tofiledate*.  The modification times are normally
expressed in the ISO 8601 format. If not specified, the
strings default to blanks.

   >>> s1 = ['bacon\n', 'eggs\n', 'ham\n', 'guido\n']
   >>> s2 = ['python\n', 'eggy\n', 'hamster\n', 'guido\n']
   >>> sys.stdout.writelines(unified_diff(s1, s2, fromfile='before.py', tofile='after.py'))
   --- before.py
   +++ after.py
   @@ -1,4 +1,4 @@
   -bacon
   -eggs
   -ham
   +python
   +eggy
   +hamster
    guido

请参阅 :ref:`difflib-interface` 获取更详细的示例。

> *Changed in 3.15*: Added the *color* parameter.

Setting the optional *autojunk* argument to `False` will turn
`automatic junk heuristic` off.

> *Changed in 3.16*: Added keyword-only *autojunk* parameter.
