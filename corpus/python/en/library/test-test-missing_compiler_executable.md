---
id: "python-en-function-test-missing_compiler_executable"
language: "python"
lang: "en"
category: "function"
name: "missing_compiler_executable"
signature: "missing_compiler_executable(cmd_names=[])"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.missing_compiler_executable"
license: "PSF"
updated: "2026-10-01"
---

# missing_compiler_executable

Check for the existence of the compiler executables whose names are listed
in *cmd_names* or all the compiler executables when *cmd_names* is empty
and return the first missing executable or `None` when none is found
missing.
