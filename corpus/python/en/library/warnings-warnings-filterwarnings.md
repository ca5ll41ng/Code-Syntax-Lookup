---
id: "python-en-function-warnings-filterwarnings"
language: "python"
lang: "en"
category: "function"
name: "filterwarnings"
signature: "filterwarnings(action, message='', category=Warning, module='', lineno=0, append=False)"
directive: "function"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.filterwarnings"
license: "PSF"
updated: "2026-10-01"
---

# filterwarnings

Insert an entry into the list of `warnings filter specifications`.  The entry is inserted at the front by default; if
*append* is true, it is inserted at the end.  This checks the types of the
arguments, compiles the *message* and *module* regular expressions, and
inserts them as a tuple in the list of warnings filters.  Entries closer to
the front of the list override entries later in the list, if both match a
particular warning.  Omitted arguments default to a value that matches
everything.
