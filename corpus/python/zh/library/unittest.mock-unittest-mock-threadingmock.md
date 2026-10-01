---
id: "python-zh-function-unittest-mock-threadingmock"
language: "python"
lang: "zh"
category: "function"
name: "ThreadingMock"
signature: "ThreadingMock(spec=None, side_effect=None, return_value=DEFAULT, wraps=None, name=None, spec_set=None, unsafe=False, *, timeout=UNSET, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/zh-cn/3/library/unittest.mock.html#unittest.mock.ThreadingMock"
license: "PSF"
updated: "2026-10-01"
---

# ThreadingMock

A version of `MagicMock` for multithreading tests. The
`ThreadingMock` object provides extra methods to wait for a call to
be invoked, rather than assert on it immediately.

The default timeout is specified by the `timeout` argument, or if unset by the
`ThreadingMock.DEFAULT_TIMEOUT` attribute, which defaults to blocking (`None`).

你可以通过设置 :attr:`ThreadingMock.DEFAULT_TIMEOUT` 来配置全局默认超时。

method:: wait_until_called(*, timeout=UNSET)

method:: wait_until_any_call_with(*args, **kwargs)

attribute:: DEFAULT_TIMEOUT

> *Added in 3.13*
