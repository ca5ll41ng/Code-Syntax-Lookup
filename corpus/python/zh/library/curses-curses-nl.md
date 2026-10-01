---
id: "python-zh-function-curses-nl"
language: "python"
lang: "zh"
category: "function"
name: "nl"
signature: "nl(flag=True)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.nl"
license: "PSF"
updated: "2026-10-01"
---

# nl

Enter newline mode.  This mode translates the return key into newline on input,
and translates newline into return and line-feed on output. Newline mode is
initially on.

如果 *flag* 为 ``False``，则效果与调用 :func:`nonl` 相同。
