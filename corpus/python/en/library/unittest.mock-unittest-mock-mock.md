---
id: "python-en-function-unittest-mock-mock"
language: "python"
lang: "en"
category: "function"
name: "Mock"
signature: "Mock(spec=None, side_effect=None, return_value=DEFAULT, wraps=None, name=None, spec_set=None, unsafe=False, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock"
license: "PSF"
updated: "2026-10-01"
---

# Mock

Create a new `Mock` object. `Mock` takes several optional arguments
that specify the behaviour of the Mock object:

* *spec*: This can be either a list or tuple of strings,
  or an existing object (a class or instance)
  that acts as the specification for the mock object.
  If you pass in an object then a list of strings is formed by calling dir on
  the object (excluding unsupported magic attributes and methods).
  Accessing any attribute not in this list will raise an `AttributeError`.

  If *spec* is an object (rather than a list of strings) then
  `~object.__class__` returns the class of the spec object. This
  allows mocks to pass `isinstance` tests.

> *Changed in next*: :func:`dir` now works for a mock created with a tuple *spec*.

* *spec_set*: A stricter variant of *spec*. If used, attempting to *set*
  or get an attribute on the mock that isn't on the object passed as
  *spec_set* will raise an `AttributeError`.

* *side_effect*: A function to be called whenever the Mock is called. See
  the `~Mock.side_effect` attribute. Useful for raising exceptions or
  dynamically changing return values. The function is called with the same
  arguments as the mock, and unless it returns `DEFAULT`, the return
  value of this function is used as the return value.

  Alternatively *side_effect* can be an exception class or instance. In
  this case the exception will be raised when the mock is called.

  If *side_effect* is an iterable then each call to the mock will return
  the next value from the iterable.

  A *side_effect* can be cleared by setting it to `None`.

* *return_value*: The value returned when the mock is called. By default
  this is a new Mock (created on first access). See the
  `return_value` attribute.

* *unsafe*: By default, accessing any attribute whose name starts with
  *assert*, *assret*, *asert*, *aseert* or *assrt* will raise an
  `AttributeError`. Passing `unsafe=True` will allow access to
  these attributes.

> *Added in 3.5*

* *wraps*: Item for the mock object to wrap. If *wraps* is not `None` then
  calling the Mock will pass the call through to the wrapped object
  (returning the real result). Attribute access on the mock will return a
  Mock object that wraps the corresponding attribute of the wrapped
  object (so attempting to access an attribute that doesn't exist will
  raise an `AttributeError`).

  If the mock has an explicit *return_value* set then calls are not passed
  to the wrapped object and the *return_value* is returned instead.

* *name*: If the mock has a name then it will be used in the repr of the
  mock. This can be useful for debugging. The name is propagated to child
  mocks.

Mocks can also be called with arbitrary keyword arguments. These will be
used to set attributes on the mock after it is created. See the
`configure_mock` method for details.

method:: assert_called()

method:: assert_called_once()

method:: assert_called_with(*args, **kwargs)

method:: assert_called_once_with(*args, **kwargs)

method:: assert_any_call(*args, **kwargs)

method:: assert_has_calls(calls, any_order=False)

method:: assert_not_called()

method:: reset_mock(*, return_value=False, side_effect=False)

method:: mock_add_spec(spec, spec_set=False)

method:: attach_mock(mock, attribute)

method:: configure_mock(**kwargs)

method:: __dir__()

method:: _get_child_mock(**kw)

attribute:: called

attribute:: call_count

attribute:: return_value

attribute:: side_effect

attribute:: call_args

attribute:: call_args_list

attribute:: method_calls

attribute:: mock_calls

attribute:: __class__
