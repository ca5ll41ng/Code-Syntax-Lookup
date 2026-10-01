---
id: "python-en-function-unittest-mock-propertymock"
language: "python"
lang: "en"
category: "function"
name: "PropertyMock"
signature: "PropertyMock(*args, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.PropertyMock"
license: "PSF"
updated: "2026-10-01"
---

# PropertyMock

A mock intended to be used as a `property`, or other
`descriptor`, on a class. `PropertyMock` provides
`~object.__get__` and `~object.__set__` methods
so you can specify a return value when it is fetched.

Fetching a `PropertyMock` instance from an object calls the mock, with
no args. Setting it calls the mock with the value being set. ::

     >>> class Foo:
     ...     @property
     ...     def foo(self):
     ...         return 'something'
     ...     @foo.setter
     ...     def foo(self, value):
     ...         pass
     ...
     >>> with patch('__main__.Foo.foo', new_callable=PropertyMock) as mock_foo:
     ...     mock_foo.return_value = 'mockity-mock'
     ...     this_foo = Foo()
     ...     print(this_foo.foo)
     ...     this_foo.foo = 6
     ...
     mockity-mock
     >>> mock_foo.mock_calls
     [call(), call(6)]
