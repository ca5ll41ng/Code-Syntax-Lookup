---
id: "python-en-function-test-adjust_int_max_str_digits"
language: "python"
lang: "en"
category: "function"
name: "adjust_int_max_str_digits"
signature: "adjust_int_max_str_digits(max_digits)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.adjust_int_max_str_digits"
license: "PSF"
updated: "2026-10-01"
---

# adjust_int_max_str_digits

This function returns a context manager that will change the global
`sys.set_int_max_str_digits` setting for the duration of the
context to allow execution of test code that needs a different limit
on the number of digits when converting between an integer and string.

> *Added in 3.11*
