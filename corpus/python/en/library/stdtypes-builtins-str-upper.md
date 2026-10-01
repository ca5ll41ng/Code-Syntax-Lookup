---
id: "python-en-function-builtins-str-upper"
language: "python"
lang: "en"
category: "function"
name: "str.upper"
signature: "str.upper()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.upper"
license: "PSF"
updated: "2026-10-01"
---

# str.upper

Return a copy of the string with all the cased characters [4]_ converted to
uppercase.  Note that `s.upper().isupper()` might be `False` if `s`
contains uncased characters or if the Unicode category of the resulting
character(s) is not "Lu" (Letter, uppercase), but e.g. "Lt" (Letter,
titlecase).

The uppercasing algorithm used is `described in section 3.13.2 'Default Case
Conversion' of the Unicode Standard
<https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-3/#G34078>`__.
