---
id: "python-en-function-socket-create_connection"
language: "python"
lang: "en"
category: "function"
name: "create_connection"
signature: "create_connection(address, timeout=GLOBAL_DEFAULT, source_address=None, *, all_errors=False)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.create_connection"
license: "PSF"
updated: "2026-10-01"
---

# create_connection

Connect to a TCP service listening on the internet *address* (a 2-tuple
`(host, port)`), and return the socket object.  This is a higher-level
function than `socket.connect`: if *host* is a non-numeric hostname,
it will try to resolve it for both `AF_INET` and `AF_INET6`,
and then try to connect to all possible addresses in turn until a
connection succeeds.  This makes it easy to write clients that are
compatible to both IPv4 and IPv6.

Passing the optional *timeout* parameter will set the timeout on the
socket instance before attempting to connect.  If no *timeout* is
supplied, the global default timeout setting returned by
`getdefaulttimeout` is used.

If supplied, *source_address* must be a 2-tuple `(host, port)` for the
socket to bind to as its source address before connecting.  If host or port
are '' or 0 respectively the OS default behavior will be used.

When a connection cannot be created, an exception is raised. By default,
it is the exception from the last address in the list. If *all_errors*
is `True`, it is an `ExceptionGroup` containing the errors of all
attempts.

> *Changed in 3.2*: *source_address* was added.

> *Changed in 3.11*: *all_errors* was added.
