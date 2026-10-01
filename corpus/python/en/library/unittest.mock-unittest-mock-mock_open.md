---
id: "python-en-function-unittest-mock-mock_open"
language: "python"
lang: "en"
category: "function"
name: "mock_open"
signature: "mock_open(mock=None, read_data='')"
directive: "function"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.mock_open"
license: "PSF"
updated: "2026-10-01"
---

# mock_open

A helper function to create a mock to replace the use of `open`. It works
for `open` called directly or used as a context manager.

The *mock* argument is the mock object to configure. If `None` (the
default) then a `MagicMock` will be created for you, with the API limited
to methods or attributes available on standard file handles.

*read_data* is a string for the `~io.RawIOBase.read`,
`~io.IOBase.readline`, and `~io.IOBase.readlines` methods
of the file handle to return.  Calls to those methods will take data from
*read_data* until it is depleted.  The mock of these methods is pretty
simplistic: every time the *mock* is called, the *read_data* is rewound to
the start.  If you need more control over the data that you are feeding to
the tested code you will need to customize this mock for yourself.  When that
is insufficient, one of the in-memory filesystem packages on `PyPI
<https://pypi.org>`_ can offer a realistic filesystem for testing.

> *Changed in 3.4*: Added :meth:`~io.IOBase.readline` and :meth:`~io.IOBase.readlines` support. The mock of :meth:`~io.RawIOBase.read` changed to consume *read_data* rather than returning it on each call.

> *Changed in 3.5*: *read_data* is now reset on each call to the *mock*.

> *Changed in 3.8*: Added :meth:`~container.__iter__` to implementation so that iteration (such as in for loops) correctly consumes *read_data*.
