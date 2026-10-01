---
id: "python-en-function-unittest-mock-seal"
language: "python"
lang: "en"
category: "function"
name: "seal"
signature: "seal(mock)"
directive: "function"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.seal"
license: "PSF"
updated: "2026-10-01"
---

# seal

Seal will disable the automatic creation of mocks when accessing an attribute of
the mock being sealed or any of its attributes that are already mocks recursively.

If a mock instance with a name or a spec is assigned to an attribute
it won't be considered in the sealing chain. This allows one to prevent seal from
fixing part of the mock object. ::

    >>> mock = Mock()
    >>> mock.submock.attribute1 = 2
    >>> mock.not_submock = mock.Mock(name="sample_name")
    >>> seal(mock)
    >>> mock.new_attribute  # This will raise AttributeError.
    >>> mock.submock.attribute2  # This will raise AttributeError.
    >>> mock.not_submock.attribute2  # This won't raise.

> *Added in 3.7*
