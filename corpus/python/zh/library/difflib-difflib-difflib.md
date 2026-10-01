---
id: "python-zh-function-difflib-difflib"
language: "python"
lang: "zh"
category: "function"
name: "difflib"
title: "The three methods that return the ratio of matching to total characters can give"
directive: "module"
module: "difflib"
source_url: "https://docs.python.org/zh-cn/3/library/difflib.html#module-difflib"
license: "PSF"
updated: "2026-10-01"
---

# The three methods that return the ratio of matching to total characters can give

The three methods that return the ratio of matching to total characters can give
different results due to differing levels of approximation, although
`~SequenceMatcher.quick_ratio` and `~SequenceMatcher.real_quick_ratio`
are always at least as large as `~SequenceMatcher.ratio`:

   >>> s = SequenceMatcher(None, "abcd", "bcde")
   >>> s.ratio()
   0.75
   >>> s.quick_ratio()
   0.75
   >>> s.real_quick_ratio()
   1.0

**Examples**

.. _sequencematcher-examples:

SequenceMatcher examples
........................

以下示例比较两个字符串，并将空格视为“垃圾”：

   >>> s = SequenceMatcher(lambda x: x == " ",
   ...                     "private Thread currentThread;",
   ...                     "private volatile Thread currentThread;")

`~SequenceMatcher.ratio` returns a float in [0, 1], measuring the similarity of the
sequences.  As a rule of thumb, a `~SequenceMatcher.ratio` value over 0.6 means the
sequences are close matches:

   >>> print(round(s.ratio(), 3))
   0.866

If you're only interested in where the sequences match,
`~SequenceMatcher.get_matching_blocks` is handy:

   >>> for block in s.get_matching_blocks():
   ...     print("a[%d] and b[%d] match for %d elements" % block)
   a[0] and b[0] match for 8 elements
   a[8] and b[17] match for 21 elements
   a[29] and b[38] match for 0 elements

Note that the last tuple returned by `~SequenceMatcher.get_matching_blocks`
is always a dummy, `(len(a), len(b), 0)`, and this is the only case in which the last
tuple element (number of elements matched) is `0`.

If you want to know how to change the first sequence into the second, use
`~SequenceMatcher.get_opcodes`:

   >>> for opcode in s.get_opcodes():
   ...     print("%6s a[%d:%d] b[%d:%d]" % opcode)
    equal a[0:8] b[0:8]
   insert a[8:8] b[8:17]
    equal a[8:29] b[17:38]

> **Seealso**
>
> * The `get_close_matches` function in this module which shows how
>   simple code building on `SequenceMatcher` can be used to do useful
>   work.
>
> * `Simple version control recipe
>   <https://code.activestate.com/recipes/576729-simple-version-control/>`_ for a small application
>   built with `SequenceMatcher`.
>

.. _differ-examples:

Differ example
..............

This example compares two texts. First we set up the texts, sequences of
individual single-line strings ending with newlines (such sequences can also be
obtained from the `~io.IOBase.readlines` method of file-like objects):

   >>> text1 = '''  1. Beautiful is better than ugly.
   ...   2. Explicit is better than implicit.
   ...   3. Simple is better than complex.
   ...   4. Complex is better than complicated.
   ... '''.splitlines(keepends=True)
   >>> len(text1)
   4
   >>> text1[0][-1]
   '\n'
   >>> text2 = '''  1. Beautiful is better than ugly.
   ...   3.   Simple is better than complex.
   ...   4. Complicated is better than complex.
   ...   5. Flat is better than nested.
   ... '''.splitlines(keepends=True)

接下来我们实例化一个 Differ 对象：

   >>> d = Differ()

Note that when instantiating a `Differ` object we may pass functions to
filter out line and character "junk."  See the `Differ` constructor for
details.

最后，我们比较两个序列：

   >>> result = list(d.compare(text1, text2))

`result` is a list of strings, so let's pretty-print it::

   >>> from pprint import pprint
   >>> pprint(result)
   ['    1. Beautiful is better than ugly.\n',
    '-   2. Explicit is better than implicit.\n',
    '-   3. Simple is better than complex.\n',
    '+   3.   Simple is better than complex.\n',
    '?     ++\n',
    '-   4. Complex is better than complicated.\n',
    '?            ^                     ---- ^\n',
    '+   4. Complicated is better than complex.\n',
    '?           ++++ ^                      ^\n',
    '+   5. Flat is better than nested.\n']

As a single multi-line string it looks like this::

**>>> import sys    >>> sys.stdout.writelines(result)        1. Beautiful is better than ugly.    -   2. Explicit is better than implicit.    -   3. Simple is better than complex.    +   3.   Simple is better than complex.    ?     ++    -   4. Complex is better than complicated.**

**+   4. Complicated is better than complex.**

   +   5. Flat is better than nested.

.. _difflib-interface:

A command-line interface to difflib
...................................

这个例子演示了如何使用 difflib 来创建类似 ``diff`` 的工具。

literalinclude:: ../includes/diff.py

ndiff example
.............

这个例子演示了如何使用 :func:`difflib.ndiff`。

literalinclude:: ../includes/ndiff.py
