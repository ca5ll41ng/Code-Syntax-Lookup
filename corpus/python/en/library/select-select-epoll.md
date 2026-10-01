---
id: "python-en-function-select-epoll"
language: "python"
lang: "en"
category: "function"
name: "epoll"
signature: "epoll(sizehint=-1, flags=0)"
directive: "function"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.epoll"
license: "PSF"
updated: "2026-10-01"
---

# epoll

Return an edge polling object,
which can be used as Edge or Level Triggered interface for I/O
events.

*sizehint* informs epoll about the expected number of events to be
registered.  It must be positive, or `-1` to use the default. It is only
used on older systems where `epoll_create1(2)` is not available;
otherwise it has no effect (though its value is still checked).

*flags* is deprecated and completely ignored.  However, when supplied, its
value must be `0` or `select.EPOLL_CLOEXEC`, otherwise `OSError` is
raised.

See the `epoll-objects` section below for the methods supported by
epolling objects.

`epoll` objects support the context management protocol: when used in a
`with` statement, the new file descriptor is automatically closed
at the end of the block.

The new file descriptor is `non-inheritable`.

> *Changed in 3.3*: Added the *flags* parameter.

> *Changed in 3.4*: Support for the :keyword:`with` statement was added. The new file descriptor is now non-inheritable.

> *Deprecated since 3.4*: The *flags* parameter.  ``select.EPOLL_CLOEXEC`` is used by default now. Use :func:`os.set_inheritable` to make the file descriptor inheritable.

> *Changed in 3.15*: When CPython is built, this function may be disabled using :option:`--disable-epoll`.

availability:: Linux >= 2.5.44.
