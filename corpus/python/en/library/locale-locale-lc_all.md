---
id: "python-en-function-locale-lc_all"
language: "python"
lang: "en"
category: "function"
name: "LC_ALL"
directive: "data"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.LC_ALL"
license: "PSF"
updated: "2026-10-01"
---

# LC_ALL

Combination of all locale settings.  If this flag is used when the locale is
changed, setting the locale for all categories is attempted. If that fails for
any category, no category is changed at all.  When the locale is retrieved using
this flag, a string indicating the setting for all categories is returned. This
string can be later used to restore the settings.
