---
id: "python-en-function-unittest-mock-sentinel"
language: "python"
lang: "en"
category: "function"
name: "sentinel"
directive: "data"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.sentinel"
license: "PSF"
updated: "2026-10-01"
---

# sentinel

The `sentinel` object provides a convenient way of providing unique
objects for your tests.

Attributes are created on demand when you access them by name. Accessing
the same attribute will always return the same object. The objects
returned have a sensible repr so that test failure messages are readable.

> *Changed in 3.7*: The ``sentinel`` attributes now preserve their identity when they are :mod:`copied <copy>` or :mod:`pickled <pickle>`.
