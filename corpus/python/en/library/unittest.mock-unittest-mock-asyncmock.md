---
id: "python-en-function-unittest-mock-asyncmock"
language: "python"
lang: "en"
category: "function"
name: "AsyncMock"
signature: "AsyncMock(spec=None, side_effect=None, return_value=DEFAULT, wraps=None, name=None, spec_set=None, unsafe=False, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.AsyncMock"
license: "PSF"
updated: "2026-10-01"
---

# AsyncMock

An asynchronous version of `MagicMock`. The `AsyncMock` object will
behave so the object is recognized as an async function, and the result of a
call is an awaitable.

  >>> mock = AsyncMock()
  >>> inspect.iscoroutinefunction(mock)
  True
  >>> inspect.isawaitable(mock())  # doctest: +SKIP
  True

The result of `mock()` is an async function which will have the outcome
of `side_effect` or `return_value` after it has been awaited:

- if `side_effect` is a function, the async function will return the
  result of that function,
- if `side_effect` is an exception, the async function will raise the
  exception,
- if `side_effect` is an iterable, the async function will return the
  next value of the iterable, however, if the sequence of result is
  `exhausted`, `StopAsyncIteration` is raised immediately,
- if `side_effect` is not defined, the async function will return the
  value defined by `return_value`, hence, by default, the async function
  returns a new `AsyncMock` object.

Setting the *spec* of a `Mock` or `MagicMock` to an async function
will result in a coroutine object being returned after calling.

  >>> async def async_func(): pass
  ...
  >>> mock = MagicMock(async_func)
  >>> mock
  <MagicMock spec='function' id='...'>
  >>> mock()  # doctest: +SKIP
  <coroutine object AsyncMockMixin._mock_call at ...>

Setting the *spec* of a `Mock`, `MagicMock`, or `AsyncMock`
to a class with asynchronous and synchronous functions will automatically
detect the synchronous functions and set them as `MagicMock` (if the
parent mock is `AsyncMock` or `MagicMock`) or `Mock` (if
the parent mock is `Mock`). All asynchronous functions will be
`AsyncMock`.

>>> class ExampleClass:
...     def sync_foo():
...         pass
...     async def async_foo():
...         pass
...
>>> a_mock = AsyncMock(ExampleClass)
>>> a_mock.sync_foo
<MagicMock name='mock.sync_foo' id='...'>
>>> a_mock.async_foo
<AsyncMock name='mock.async_foo' id='...'>
>>> mock = Mock(ExampleClass)
>>> mock.sync_foo
<Mock name='mock.sync_foo' id='...'>
>>> mock.async_foo
<AsyncMock name='mock.async_foo' id='...'>

> *Added in 3.8*

method:: assert_awaited()

method:: assert_awaited_once()

method:: assert_awaited_with(*args, **kwargs)

method:: assert_awaited_once_with(*args, **kwargs)

method:: assert_any_await(*args, **kwargs)

method:: assert_has_awaits(calls, any_order=False)

method:: assert_not_awaited()

method:: reset_mock(*args, **kwargs)

attribute:: await_count

attribute:: await_args

attribute:: await_args_list
