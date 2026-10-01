---
id: "python-zh-function-re-match-__getitem__"
language: "python"
lang: "zh"
category: "function"
name: "Match.__getitem__"
signature: "Match.__getitem__(g)"
directive: "method"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.Match.__getitem__"
license: "PSF"
updated: "2026-10-01"
---

# Match.__getitem__

This is identical to `m.group(g)`.  This allows easier access to
an individual group from a match::

   >>> m = re.search(r"(\w+) (\w+)", "Norwegian Blue, pining for the fjords")
   >>> m[0]       # The entire match
   'Norwegian Blue'
   >>> m[1]       # The first parenthesized subgroup.
   'Norwegian'
   >>> m[2]       # The second parenthesized subgroup.
   'Blue'

命名分组也是受支持的::

   >>> m = re.search(r"(?P<adjective>\w+) (?P<animal>\w+)", "killer rabbit")
   >>> m['adjective']
   'killer'
   >>> m['animal']
   'rabbit'

> *Added in 3.6*
