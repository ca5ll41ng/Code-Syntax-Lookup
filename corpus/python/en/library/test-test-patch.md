---
id: "python-en-function-test-patch"
language: "python"
lang: "en"
category: "function"
name: "patch"
signature: "patch(test_instance, object_to_patch, attr_name, new_value)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.patch"
license: "PSF"
updated: "2026-10-01"
---

# patch

Override *object_to_patch.attr_name* with *new_value*.  Also add
cleanup procedure to *test_instance* to restore *object_to_patch* for
*attr_name*.  The *attr_name* should be a valid attribute for
*object_to_patch*.
