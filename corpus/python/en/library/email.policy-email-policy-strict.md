---
id: "python-en-function-email-policy-strict"
language: "python"
lang: "en"
category: "function"
name: "strict"
directive: "data"
module: "email.policy"
source_url: "https://docs.python.org/3/library/email.policy.html#email.policy.strict"
license: "PSF"
updated: "2026-10-01"
---

# strict

Convenience instance.  The same as `default` except that
`raise_on_defect` is set to `True`.  This allows any policy to be made
strict by writing::

     somepolicy + policy.strict
