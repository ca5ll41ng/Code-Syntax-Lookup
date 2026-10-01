---
id: "python-en-function-doctest-outputchecker"
language: "python"
lang: "en"
category: "function"
name: "OutputChecker"
signature: "OutputChecker()"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.OutputChecker"
license: "PSF"
updated: "2026-10-01"
---

# OutputChecker

A class used to check the whether the actual output from a doctest example
matches the expected output.  `OutputChecker` defines two methods:
`check_output`, which compares a given pair of outputs, and returns `True`
if they match; and `output_difference`, which returns a string describing
the differences between two outputs.

`OutputChecker` defines the following methods:

method:: check_output(want, got, optionflags)

method:: output_difference(example, got, optionflags)
