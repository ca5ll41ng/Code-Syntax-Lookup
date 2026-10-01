---
id: "python-en-function-email-charset-add_alias"
language: "python"
lang: "en"
category: "function"
name: "add_alias"
signature: "add_alias(alias, canonical)"
directive: "function"
module: "email.charset"
source_url: "https://docs.python.org/3/library/email.charset.html#email.charset.add_alias"
license: "PSF"
updated: "2026-10-01"
---

# add_alias

Add a character set alias.  *alias* is the alias name, e.g. `latin-1`.
*canonical* is the character set's canonical name, e.g. `iso-8859-1`.

The global charset alias registry is kept in the module global dictionary
`ALIASES`.
