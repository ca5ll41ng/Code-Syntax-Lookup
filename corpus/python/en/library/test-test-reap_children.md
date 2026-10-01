---
id: "python-en-function-test-reap_children"
language: "python"
lang: "en"
category: "function"
name: "reap_children"
signature: "reap_children()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.reap_children"
license: "PSF"
updated: "2026-10-01"
---

# reap_children

Use this at the end of `test_main` whenever sub-processes are started.
This will help ensure that no extra children (zombies) stick around to
hog resources and create problems when looking for refleaks.
