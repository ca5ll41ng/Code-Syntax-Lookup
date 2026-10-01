---
id: "python-en-function-unittest-testloader"
language: "python"
lang: "en"
category: "function"
name: "TestLoader"
signature: "TestLoader()"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.TestLoader"
license: "PSF"
updated: "2026-10-01"
---

# TestLoader

The `TestLoader` class is used to create test suites from classes and
modules.  Normally, there is no need to create an instance of this class; the
`unittest` module provides an instance that can be shared as
`unittest.defaultTestLoader`.  Using a subclass or instance, however,
allows customization of some configurable properties.

`TestLoader` objects have the following attributes:

attribute:: errors

`TestLoader` objects have the following methods:

method:: loadTestsFromTestCase(testCaseClass)

method:: loadTestsFromModule(module, *, pattern=None)

method:: loadTestsFromName(name, module=None)

method:: loadTestsFromNames(names, module=None)

method:: getTestCaseNames(testCaseClass)

method:: discover(start_dir, pattern='test*.py', top_level_dir=None)

The following attributes of a `TestLoader` can be configured either by
subclassing or assignment on an instance:

attribute:: testMethodPrefix

attribute:: sortTestMethodsUsing

attribute:: suiteClass

attribute:: testNamePatterns
