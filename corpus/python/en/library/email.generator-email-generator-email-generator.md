---
id: "python-en-function-email-generator-email-generator"
language: "python"
lang: "en"
category: "function"
name: "email.generator"
title: "`unixfrom`, and that there are no `email.policy` settings calling for"
directive: "module"
module: "email.generator"
source_url: "https://docs.python.org/3/library/email.generator.html#module-email.generator"
license: "PSF"
updated: "2026-10-01"
---

# `unixfrom`, and that there are no `email.policy` settings calling for

#### Footnotes

.. [#] This statement assumes that you use the appropriate setting for
       `unixfrom`, and that there are no `email.policy` settings calling for
       automatic adjustments (for example,
       `~email.policy.EmailPolicy.refold_source` must be `none`, which is
       *not* the default).  It is also not 100% true, since if the message
       does not conform to the RFC standards occasionally information about the
       exact original text is lost during parsing error recovery.  It is a goal
       to fix these latter edge cases when possible.
