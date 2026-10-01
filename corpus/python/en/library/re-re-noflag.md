---
id: "python-en-function-re-noflag"
language: "python"
lang: "en"
category: "function"
name: "NOFLAG"
directive: "data"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.NOFLAG"
license: "PSF"
updated: "2026-10-01"
---

# NOFLAG

Indicates no flag being applied, the value is `0`.  This flag may be used
as a default value for a function keyword argument or as a base value that
will be conditionally ORed with other flags.  Example of use as a default
value::

   def myfunc(pattern, text, flag=re.NOFLAG):
       return re.search(pattern, text, flag)

> *Added in 3.11*
