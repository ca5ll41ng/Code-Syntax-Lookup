---
id: "python-zh-function-asyncio-eventloop-local_addr-none-remote_addr-none"
language: "python"
lang: "zh"
category: "function"
name: "local_addr=None, remote_addr=None, *, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.local_addr=None, remote_addr=None, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# local_addr=None, remote_addr=None, *, \

创建一个数据报连接。

The socket family can be either :py`~socket.AF_INET`,
:py`~socket.AF_INET6`, or :py`~socket.AF_UNIX`,
depending on *host* (or the *family* argument, if provided).

套接字类型将为 :py:const:`~socket.SOCK_DGRAM`。

*protocol_factory* must be a callable returning a
`protocol` implementation.

成功时返回一个 ``(transport, protocol)`` 元组。

其他参数：

* *local_addr*, if given, is a `(local_host, local_port)` tuple used
  to bind the socket locally.  The *local_host* and *local_port*
  are looked up using `getaddrinfo`.

> **Note**
>
> On Windows, when using the proactor event loop with `local_addr=None`,
> an `OSError` with `errno.WSAEINVAL` will be raised
> when running it.
>

* *remote_addr*, if given, is a `(remote_host, remote_port)` tuple used
  to connect the socket to a remote address.  The *remote_host* and
  *remote_port* are looked up using `getaddrinfo`.

* *family*, *proto*, *flags* are the optional address family, protocol
  and flags to be passed through to `getaddrinfo` for *host*
  resolution. If given, these should all be integers from the
  corresponding `socket` module constants.

* *reuse_port* tells the kernel to allow this endpoint to be bound to the
  same port as other existing endpoints are bound to, so long as they all
  set this flag when being created. This option is not supported on Windows
  and some Unixes. If the `socket.SO_REUSEPORT` constant is not
  defined then this capability is unsupported.

* *allow_broadcast* tells the kernel to allow this endpoint to send
  messages to the broadcast address.

* *sock* can optionally be specified in order to use a preexisting,
  already connected, `socket.socket` object to be used by the
  transport. If specified, *local_addr* and *remote_addr* should be omitted
  (must be `None`).

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> transport created. To close the socket, call the transport's
> `~asyncio.BaseTransport.close` method.
>

See `UDP echo client protocol` and
`UDP echo server protocol` examples.

> *Changed in 3.4.4*: The *family*, *proto*, *flags*, *reuse_address*, *reuse_port*, *allow_broadcast*, and *sock* parameters were added.

> *Changed in 3.8*: Added support for Windows.

> *Changed in 3.8.1*: The *reuse_address* parameter is no longer supported, as using :ref:`socket.SO_REUSEADDR <socket-unix-constants>` poses a significant security concern for UDP. Explicitly passing ``reuse_address=True`` will raise an exception.  When multiple processes with differing UIDs assign sockets to an identical UDP socket address with ``SO_REUSEADDR``, incoming packets can become randomly distributed among the sockets.  For supported platforms, *reuse_port* can be used as a replacement for similar functionality. With *reuse_port*, :ref:`socket.SO_REUSEPORT <socket-unix-constants>` is used instead, which specifically prevents processes with differing UIDs from assigning sockets to the same socket address.

> *Changed in 3.11*: The *reuse_address* parameter, disabled since Python 3.8.1, 3.7.6 and 3.6.10, has been entirely removed.
