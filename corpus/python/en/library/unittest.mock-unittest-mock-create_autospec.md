---
id: "python-en-function-unittest-mock-create_autospec"
language: "python"
lang: "en"
category: "function"
name: "create_autospec"
signature: "create_autospec(spec, spec_set=False, instance=False, **kwargs)"
directive: "function"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.create_autospec"
license: "PSF"
updated: "2026-10-01"
---

# create_autospec

Create a mock object using another object as a spec. Attributes on the
mock will use the corresponding attribute on the *spec* object as their
spec.

Functions or methods being mocked will have their arguments checked to
ensure that they are called with the correct signature.

If *spec_set* is `True` then attempting to set attributes that don't exist
on the spec object will raise an `AttributeError`.

If a class is used as a spec then the return value of the mock (the
instance of the class) will have the same spec. You can use a class as the
spec for an instance object by passing `instance=True`. The returned mock
will only be callable if instances of the mock are callable.

`create_autospec` also takes arbitrary keyword arguments that are passed to
the constructor of the created mock.
