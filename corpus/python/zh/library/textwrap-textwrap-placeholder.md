---
id: "python-zh-function-textwrap-placeholder"
language: "python"
lang: "zh"
category: "function"
name: "placeholder=' [...]')"
directive: "function"
module: "textwrap"
source_url: "https://docs.python.org/zh-cn/3/library/textwrap.html#textwrap.placeholder=' [...]')"
license: "PSF"
updated: "2026-10-01"
---

# placeholder=' [...]')

折叠并截短给定的 *text* 以符合给定的 *width*。

First the whitespace in *text* is collapsed (all whitespace is replaced by
single spaces).  If the result fits in the *width*, it is returned.
Otherwise, enough words are dropped from the end so that the remaining words
plus the *placeholder* fit within *width*::

   >>> textwrap.shorten("Hello  world!", width=12)
   'Hello world!'
   >>> textwrap.shorten("Hello  world!", width=11)
   'Hello [...]'
   >>> textwrap.shorten("Hello world", width=10, placeholder="...")
   'Hello...'

Optional keyword arguments correspond to the instance attributes of
`TextWrapper`, documented below.  Note that the whitespace is
collapsed before the text is passed to the `TextWrapper` `fill`
function, so changing the value of `.tabsize`, `.expand_tabs`,
`.drop_whitespace`, and `.replace_whitespace` will have no effect.

> *Added in 3.4*
