---
id: "python-zh-function-textwrap-textwrapper"
language: "python"
lang: "zh"
category: "function"
name: "TextWrapper"
signature: "TextWrapper(**kwargs)"
directive: "class"
module: "textwrap"
source_url: "https://docs.python.org/zh-cn/3/library/textwrap.html#textwrap.TextWrapper"
license: "PSF"
updated: "2026-10-01"
---

# TextWrapper

The `TextWrapper` constructor accepts a number of optional keyword
arguments.  Each keyword argument corresponds to an instance attribute, so
for example ::

   wrapper = TextWrapper(initial_indent="* ")

相当于：

   wrapper = TextWrapper()
   wrapper.initial_indent = "* "

You can reuse the same `TextWrapper` object many times, and you can
change any of its options through direct assignment to instance attributes
between uses.

The `TextWrapper` instance attributes (and keyword arguments to the
constructor) are as follows:

attribute:: width

attribute:: expand_tabs

attribute:: tabsize

attribute:: replace_whitespace

attribute:: drop_whitespace

attribute:: initial_indent

attribute:: subsequent_indent

attribute:: fix_sentence_endings

attribute:: break_long_words

attribute:: break_on_hyphens

attribute:: max_lines

attribute:: placeholder

`TextWrapper` also provides some public methods, analogous to the
module-level convenience functions:

method:: wrap(text)

method:: fill(text)
