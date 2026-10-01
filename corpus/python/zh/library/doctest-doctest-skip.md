---
id: "python-zh-function-doctest-skip"
language: "python"
lang: "zh"
category: "function"
name: "SKIP"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.SKIP"
license: "PSF"
updated: "2026-10-01"
---

# SKIP

When specified, do not run the example at all.  This can be useful in contexts
where doctest examples serve as both documentation and test cases, and an
example should be included for documentation purposes, but should not be
checked.  E.g., the example's output might be random; or the example might
depend on resources which would be unavailable to the test driver.

SKIP 标志也可用于临时 "注释" 用例。
