---
id: "python-en-function-test-impl_detail"
language: "python"
lang: "en"
category: "function"
name: "impl_detail"
signature: "impl_detail(msg=None, **guards)"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.impl_detail"
license: "PSF"
updated: "2026-10-01"
---

# impl_detail

Decorator for invoking `check_impl_detail` on *guards*.  If that
returns `False`, then uses *msg* as the reason for skipping the test.
