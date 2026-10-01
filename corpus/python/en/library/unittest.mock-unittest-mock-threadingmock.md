---
id: "python-en-function-unittest-mock-threadingmock"
language: "python"
lang: "en"
category: "function"
name: "ThreadingMock"
signature: "ThreadingMock(spec=None, side_effect=None, return_value=DEFAULT, wraps=None, name=None, spec_set=None, unsafe=False, *, timeout=UNSET, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.ThreadingMock"
license: "PSF"
updated: "2026-10-01"
---

# ThreadingMock

A version of `MagicMock` for multithreading tests. The
`ThreadingMock` object provides extra methods to wait for a call to
be invoked, rather than assert on it immediately.

The default timeout is specified by the `timeout` argument, or if unset by the
`ThreadingMock.DEFAULT_TIMEOUT` attribute, which defaults to blocking (`None`).

You can configure the global default timeout by setting `ThreadingMock.DEFAULT_TIMEOUT`.

method:: wait_until_called(*, timeout=UNSET)

method:: wait_until_any_call_with(*args, **kwargs)

attribute:: DEFAULT_TIMEOUT

> *Added in 3.13*
