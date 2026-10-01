---
id: "python-en-function-multiprocessing-listener"
language: "python"
lang: "en"
category: "function"
name: "Listener"
signature: "Listener([address[, family[, backlog[, authkey]]]])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Listener"
license: "PSF"
updated: "2026-10-01"
---

# Listener

A wrapper for a bound socket or Windows named pipe which is 'listening' for
connections.

*address* is the address to be used by the bound socket or named pipe of the
listener object.

> **Note**
>
> If an address of '0.0.0.0' is used, the address will not be a connectable
> end point on Windows. If you require a connectable end-point,
> you should use '127.0.0.1'.
>

*family* is the type of socket (or named pipe) to use.  This can be one of
the strings `'AF_INET'` (for a TCP socket), `'AF_UNIX'` (for a Unix
domain socket) or `'AF_PIPE'` (for a Windows named pipe).  Of these only
the first is guaranteed to be available.  If *family* is `None` then the
family is inferred from the format of *address*.  If *address* is also
`None` then a default is chosen.  This default is the family which is
assumed to be the fastest available.  See
`multiprocessing-address-formats`.  Note that if *family* is
`'AF_UNIX'` and address is `None` then the socket will be created in a
private temporary directory created using `tempfile.mkstemp`.

If the listener object uses a socket then *backlog* (1 by default) is passed
to the `~socket.socket.listen` method of the socket once it has been
bound.

If *authkey* is given and not `None`, it should be a byte string and will be
used as the secret key for an HMAC-based authentication challenge. No
authentication is done if *authkey* is `None`.
`~multiprocessing.AuthenticationError` is raised if authentication fails.
See `multiprocessing-auth-keys`.

method:: accept()

method:: close()

Listener objects have the following read-only properties:

attribute:: address

attribute:: last_accepted

> *Changed in 3.3*: Listener objects now support the context management protocol -- see :ref:`typecontextmanager`.  :meth:`~contextmanager.__enter__` returns the listener object, and :meth:`~contextmanager.__exit__` calls :meth:`close`.
