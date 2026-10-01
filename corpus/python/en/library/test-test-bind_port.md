---
id: "python-en-function-test-bind_port"
language: "python"
lang: "en"
category: "function"
name: "bind_port"
signature: "bind_port(sock, host=HOST)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.bind_port"
license: "PSF"
updated: "2026-10-01"
---

# bind_port

Bind the socket to a free port and return the port number.  Relies on
ephemeral ports in order to ensure we are using an unbound port.  This is
important as many tests may be running simultaneously, especially in a
buildbot environment.  This method raises an exception if the
`sock.family` is `~socket.AF_INET` and `sock.type` is
`~socket.SOCK_STREAM`, and the socket has
`~socket.SO_REUSEADDR` or `~socket.SO_REUSEPORT` set on it.
Tests should never set these socket options for TCP/IP sockets.
The only case for setting these options is testing multicasting via
multiple UDP sockets.

Additionally, if the `~socket.SO_EXCLUSIVEADDRUSE` socket option is
available (i.e. on Windows), it will be set on the socket.  This will
prevent anyone else from binding to our host/port for the duration of the
test.
