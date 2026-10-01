---
id: "python-en-function-logging-handlers-sockethandler"
language: "python"
lang: "en"
category: "function"
name: "SocketHandler"
signature: "SocketHandler(host, port)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.SocketHandler"
license: "PSF"
updated: "2026-10-01"
---

# SocketHandler

Returns a new instance of the `SocketHandler` class intended to
communicate with a remote machine whose address is given by *host* and *port*.

> *Changed in 3.4*: If ``port`` is specified as ``None``, a Unix domain socket is created using the value in ``host`` - otherwise, a TCP socket is created.

method:: close()

method:: emit()

method:: handleError()

method:: makeSocket()

method:: makePickle(record)

method:: send(packet)

method:: createSocket()
