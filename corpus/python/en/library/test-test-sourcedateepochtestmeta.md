---
id: "python-en-function-test-sourcedateepochtestmeta"
language: "python"
lang: "en"
category: "function"
name: "SourceDateEpochTestMeta"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.SourceDateEpochTestMeta"
license: "PSF"
updated: "2026-10-01"
---

# SourceDateEpochTestMeta

Metaclass wrapping all test methods of the class with
`with_source_date_epoch` if the *source_date_epoch* keyword class
argument is true, or with `without_source_date_epoch` otherwise.
For example::

   class TestsWithSourceEpoch(Tests,
                              metaclass=SourceDateEpochTestMeta,
                              source_date_epoch=True):
       pass
