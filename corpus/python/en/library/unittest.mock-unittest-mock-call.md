---
id: "python-en-function-unittest-mock-call"
language: "python"
lang: "en"
category: "function"
name: "call"
signature: "call(*args, **kwargs)"
directive: "function"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.call"
license: "PSF"
updated: "2026-10-01"
---

# call

`call` is a helper object for making simpler assertions, for comparing with
`~Mock.call_args`, `~Mock.call_args_list`,
`~Mock.mock_calls` and `~Mock.method_calls`. `call` can also be
used with `~Mock.assert_has_calls`.

    >>> m = MagicMock(return_value=None)
    >>> m(1, 2, a='foo', b='bar')
    >>> m()
    >>> m.call_args_list == [call(1, 2, a='foo', b='bar'), call()]
    True
