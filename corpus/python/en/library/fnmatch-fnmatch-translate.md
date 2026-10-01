---
id: "python-en-function-fnmatch-translate"
language: "python"
lang: "en"
category: "function"
name: "translate"
signature: "translate(pat)"
directive: "function"
module: "fnmatch"
source_url: "https://docs.python.org/3/library/fnmatch.html#fnmatch.translate"
license: "PSF"
updated: "2026-10-01"
---

# translate

Return the shell-style pattern *pat* converted to a regular expression for
using with `re.prefixmatch`. The pattern is expected to be a
`str`.

Example:

   >>> import fnmatch, re
   >>>
   >>> regex = fnmatch.translate('*.txt')
   >>> regex
   '(?s:.*\\.txt)\\z'
   >>> reobj = re.compile(regex)
   >>> reobj.prefixmatch('foobar.txt')
   <re.Match object; span=(0, 10), match='foobar.txt'>
