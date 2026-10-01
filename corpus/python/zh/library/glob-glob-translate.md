---
id: "python-zh-function-glob-translate"
language: "python"
lang: "zh"
category: "function"
name: "translate"
signature: "translate(pathname, *, recursive=False, include_hidden=False, seps=None)"
directive: "function"
module: "glob"
source_url: "https://docs.python.org/zh-cn/3/library/glob.html#glob.translate"
license: "PSF"
updated: "2026-10-01"
---

# translate

Convert the given path specification to a regular expression for use with
`re.prefixmatch`. The path specification can contain shell-style
wildcards.

例如：

   >>> import glob, re
   >>>
   >>> regex = glob.translate('**/*.txt', recursive=True, include_hidden=True)
   >>> regex
   '(?s:(?:.+/)?[^/]*\\.txt)\\z'
   >>> reobj = re.compile(regex)
   >>> reobj.prefixmatch('foo/bar/baz.txt')
   <re.Match object; span=(0, 15), match='foo/bar/baz.txt'>

Path separators and segments are meaningful to this function, unlike
`fnmatch.translate`. By default wildcards do not match path
separators, and `*` pattern segments match precisely one path segment.

If *recursive* is true, the pattern segment "`**`" will match any number
of path segments.

If *include_hidden* is true, wildcards can match path segments that start
with a dot (`.`).

A sequence of path separators may be supplied to the *seps* argument. If
not given, `os.sep` and `~os.altsep` (if available) are used.

> **Seealso**
>
> `pathlib.PurePath.full_match` and `pathlib.Path.glob`
> methods, which call this function to implement pattern matching and
> globbing.
>

> *Added in 3.13*
