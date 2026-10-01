---
id: "python-en-function-logging-handlers-sysloghandler"
language: "python"
lang: "en"
category: "function"
name: "SysLogHandler"
signature: "SysLogHandler(address=('localhost', SYSLOG_UDP_PORT), facility=LOG_USER, socktype=socket.SOCK_DGRAM, timeout=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.SysLogHandler"
license: "PSF"
updated: "2026-10-01"
---

# SysLogHandler

Returns a new instance of the `SysLogHandler` class intended to
communicate with a remote Unix machine whose address is given by *address* in
the form of a `(host, port)` tuple.  If *address* is not specified,
`('localhost', 514)` is used.  The address is used to open a socket.  An
alternative to providing a `(host, port)` tuple is providing an address as a
string or a `bytes` object, for example '/dev/log'.
In this case, a Unix domain socket is used to
send the message to the syslog. If *facility* is not specified,
`LOG_USER` is used. The type of socket opened depends on the
*socktype* argument, which defaults to `socket.SOCK_DGRAM` and thus
opens a UDP socket. To open a TCP socket (for use with the newer syslog
daemons such as rsyslog), specify a value of `socket.SOCK_STREAM`.
If *timeout* is specified, it sets a timeout (in seconds) for the socket operations.
This can help prevent the program from hanging indefinitely if the syslog server is
unreachable. By default, *timeout* is `None`, meaning no timeout is applied.

Note that if your server is not listening on UDP port 514,
`SysLogHandler` may appear not to work. In that case, check what
address you should be using for a domain socket - it's system dependent.
For example, on Linux it's usually '/dev/log' but on OS/X it's
'/var/run/syslog'. You'll need to check your platform and use the
appropriate address (you may need to do this check at runtime if your
application needs to run on several platforms). On Windows, you pretty
much have to use the UDP option.

> **Note**
>
> syslog daemon - it no longer listens on a domain socket. Therefore, you cannot
> expect `SysLogHandler` to work on this system.
>
> See `91070` for more information.
>

> *Changed in 3.2*: *socktype* was added.

> *Changed in 3.14*: *timeout* was added.

> *Changed in next*: *address* can now be a :class:`bytes` object.

method:: close()

method:: createSocket()

method:: emit(record)

method:: encodePriority(facility, priority)

method:: mapPriority(levelname)
