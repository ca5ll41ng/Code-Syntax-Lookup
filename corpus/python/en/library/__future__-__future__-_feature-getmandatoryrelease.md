---
id: "python-en-function-__future__-_feature-getmandatoryrelease"
language: "python"
lang: "en"
category: "function"
name: "_Feature.getMandatoryRelease"
signature: "_Feature.getMandatoryRelease()"
directive: "method"
module: "__future__"
source_url: "https://docs.python.org/3/library/__future__.html#__future__._Feature.getMandatoryRelease"
license: "PSF"
updated: "2026-10-01"
---

# _Feature.getMandatoryRelease

In the case of a *MandatoryRelease* that has not yet occurred,
*MandatoryRelease* predicts the release in which the feature will become part of
the language.

Else *MandatoryRelease* records when the feature became part of the language; in
releases at or after that, modules no longer need a future statement to use the
feature in question, but may continue to use such imports.

*MandatoryRelease* may also be `None`, meaning that a planned feature got
dropped or that it is not yet decided.
