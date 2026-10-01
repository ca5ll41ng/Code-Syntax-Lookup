---
id: "python-zh-function-gettext-find"
language: "python"
lang: "zh"
category: "function"
name: "find"
signature: "find(domain, localedir=None, languages=None, all=False)"
directive: "function"
module: "gettext"
source_url: "https://docs.python.org/zh-cn/3/library/gettext.html#gettext.find"
license: "PSF"
updated: "2026-10-01"
---

# find

This function implements the standard `.mo` file search algorithm.  It
takes a *domain*, identical to what `textdomain` takes.  Optional
*localedir* is as in `bindtextdomain`. Optional *languages* is a list of
strings, where each string is a language code.

If *localedir* is not given, then the default system locale directory is used.
[#]_  If *languages* is not given, then the following environment variables are
searched: `LANGUAGE`, `LC_ALL`, `LC_MESSAGES`, and
`LANG`.  The first one returning a non-empty value is used for the
*languages* variable. The environment variables should contain a colon separated
list of languages, which will be split on the colon to produce the expected list
of language code strings.

`find` then expands and normalizes the languages, and then iterates
through them, searching for an existing file built of these components:

:file:`{localedir}/{language}/LC_MESSAGES/{domain}.mo`

The first such file name that exists is returned by `find`. If no such
file is found, then `None` is returned. If *all* is given, it returns a list
of all file names, in the order in which they appear in the languages list or
the environment variables.
