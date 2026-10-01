---
id: "python-en-function-logging-handlers-datagramhandler"
language: "python"
lang: "en"
category: "function"
name: "DatagramHandler"
signature: "DatagramHandler(host, port)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.DatagramHandler"
license: "PSF"
updated: "2026-10-01"
---

# DatagramHandler

Returns a new instance of the `DatagramHandler` class intended to
communicate with a remote machine whose address is given by *host* and *port*.

> **Note**
>
> between an instance of this handler and *host*. For this reason, when using a
> network socket, a DNS lookup might have to be made each time an event is
> logged, which can introduce some latency into the system. If this affects you,
> you can do a lookup yourself and initialize this handler using the looked-up IP
> address rather than the hostname.
>

> *Changed in 3.4*: If ``port`` is specified as ``None``, a Unix domain socket is created using the value in ``host`` - otherwise, a UDP socket is created.

method:: emit()

method:: makeSocket()

method:: send(s)
