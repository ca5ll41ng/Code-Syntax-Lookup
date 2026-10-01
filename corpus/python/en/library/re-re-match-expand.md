---
id: "python-en-function-re-match-expand"
language: "python"
lang: "en"
category: "function"
name: "Match.expand"
signature: "Match.expand(template)"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.expand"
license: "PSF"
updated: "2026-10-01"
---

# Match.expand

Return the string obtained by doing backslash substitution on the template
string *template*, as done by the `~Pattern.sub` method.
Escapes such as `\n` are converted to the appropriate characters,
and numeric backreferences (`\1`, `\2`) and named backreferences
(`\g<1>`, `\g<name>`) are replaced by the contents of the
corresponding group. The backreference `\g<0>` will be
replaced by the entire match.

> *Changed in 3.5*: Unmatched groups are replaced with an empty string.
