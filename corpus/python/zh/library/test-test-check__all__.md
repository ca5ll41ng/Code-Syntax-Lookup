---
id: "python-zh-function-test-check__all__"
language: "python"
lang: "zh"
category: "function"
name: "check__all__"
signature: "check__all__(test_case, module, name_of_module=None, extra=(), not_exported=())"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.check__all__"
license: "PSF"
updated: "2026-10-01"
---

# check__all__

断言 *module* 的 ``__all__`` 变量包含全部公共名称。

The module's public names (its API) are detected automatically
based on whether they match the public name convention and were defined in
*module*.

The *name_of_module* argument can specify (as a string or tuple thereof) what
module(s) an API could be defined in order to be detected as a public
API. One case for this is when *module* imports part of its public API from
other modules, possibly a C backend (like `csv` and its `_csv`).

The *extra* argument can be a set of names that wouldn't otherwise be automatically
detected as "public", like objects without a proper `~definition.__module__`
attribute. If provided, it will be added to the automatically detected ones.

The *not_exported* argument can be a set of names that must not be treated
as part of the public API even though their names indicate otherwise.

用法示例::

   import bar
   import foo
   import unittest
   from test import support

   class MiscTestCase(unittest.TestCase):
       def test__all__(self):
           support.check__all__(self, foo)

   class OtherTestCase(unittest.TestCase):
       def test__all__(self):
           extra = {'BAR_CONST', 'FOO_CONST'}
           not_exported = {'baz'}  # Undocumented name.
           # bar imports part of its API from _bar.
           support.check__all__(self, bar, ('bar', '_bar'),
                                extra=extra, not_exported=not_exported)

> *Added in 3.6*
