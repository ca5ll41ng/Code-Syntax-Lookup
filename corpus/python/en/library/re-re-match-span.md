---
id: "python-en-function-re-match-span"
language: "python"
lang: "en"
category: "function"
name: "Match.span"
signature: "Match.span([group])"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.span"
license: "PSF"
updated: "2026-10-01"
---

# Match.span

For a match *m*, return the 2-tuple `(m.start(group), m.end(group))`. Note
that if *group* did not contribute to the match, this is `(-1, -1)`.
*group* defaults to zero, the entire match.
