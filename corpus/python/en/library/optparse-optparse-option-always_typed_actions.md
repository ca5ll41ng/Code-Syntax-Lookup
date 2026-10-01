---
id: "python-en-function-optparse-option-always_typed_actions"
language: "python"
lang: "en"
category: "function"
name: "Option.ALWAYS_TYPED_ACTIONS"
directive: "attribute"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.Option.ALWAYS_TYPED_ACTIONS"
license: "PSF"
updated: "2026-10-01"
---

# Option.ALWAYS_TYPED_ACTIONS

Actions that always take a type (i.e. whose options always take a value) are
additionally listed here.  The only effect of this is that `optparse`
assigns the default type, `"string"`, to options with no explicit type
whose action is listed in `ALWAYS_TYPED_ACTIONS`.
