---
id: "python-en-function-test-check_no_resource_warning"
language: "python"
lang: "en"
category: "function"
name: "check_no_resource_warning"
signature: "check_no_resource_warning(testcase)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.check_no_resource_warning"
license: "PSF"
updated: "2026-10-01"
---

# check_no_resource_warning

Context manager to check that no `ResourceWarning` was raised.  You
must remove the object which may emit `ResourceWarning` before the
end of the context manager.
