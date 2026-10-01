---
id: "python-en-function-socket-ip_"
language: "python"
lang: "en"
category: "function"
name: "IP_*"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.IP_*"
license: "PSF"
updated: "2026-10-01"
---

# IP_*

Many constants of these forms, documented in the Unix documentation on sockets
and/or the IP protocol, are also defined in the socket module. They are
generally used in arguments to the `~socket.setsockopt` and `~socket.getsockopt`
methods of socket objects.  In most cases, only those symbols that are defined
in the Unix header files are defined; for a few symbols, default values are
provided.

> *Changed in 3.6*: ``SO_DOMAIN``, ``SO_PROTOCOL``, ``SO_PEERSEC``, ``SO_PASSSEC``, ``TCP_USER_TIMEOUT``, ``TCP_CONGESTION`` were added.

> *Changed in 3.6.5*: Added support for ``TCP_FASTOPEN``, ``TCP_KEEPCNT`` on Windows platforms when available.

> *Changed in 3.7*: ``TCP_NOTSENT_LOWAT`` was added.  Added support for ``TCP_KEEPIDLE``, ``TCP_KEEPINTVL`` on Windows platforms when available.

> *Changed in 3.10*: ``IP_RECVTOS`` was added.  Added ``TCP_KEEPALIVE``. On MacOS this constant can be used in the same  way that ``TCP_KEEPIDLE`` is used on Linux.

> *Changed in 3.11*: Added ``TCP_CONNECTION_INFO``. On MacOS this constant can be used in the same way that ``TCP_INFO`` is used on Linux and BSD.

> *Changed in 3.12*: Added ``SO_RTABLE`` and ``SO_USER_COOKIE``. On OpenBSD and FreeBSD respectively those constants can be used in the same way that ``SO_MARK`` is used on Linux. Also added missing TCP socket options from Linux: ``TCP_MD5SIG``, ``TCP_THIN_LINEAR_TIMEOUTS``, ``TCP_THIN_DUPACK``, ``TCP_REPAIR``, ``TCP_REPAIR_QUEUE``, ``TCP_QUEUE_SEQ``, ``TCP_REPAIR_OPTIONS``, ``TCP_TIMESTAMP``, ``TCP_CC_INFO``, ``TCP_SAVE_SYN``, ``TCP_SAVED_SYN``, ``TCP_REPAIR_WINDOW``, ``TCP_FASTOPEN_CONNECT``, ``TCP_ULP``, ``TCP_MD5SIG_EXT``, ``TCP_FASTOPEN_KEY``, ``TCP_FASTOPEN_NO_COOKIE``, ``TCP_ZEROCOPY_RECEIVE``, ``TCP_INQ``, ``TCP_TX_DELAY``. Added ``IP_PKTINFO``, ``IP_UNBLOCK_SOURCE``, ``IP_BLOCK_SOURCE``, ``IP_ADD_SOURCE_MEMBERSHIP``, ``IP_DROP_SOURCE_MEMBERSHIP``.

> *Changed in 3.13*: Added ``SO_BINDTOIFINDEX``. On Linux this constant can be used in the same way that ``SO_BINDTODEVICE`` is used, but with the index of a network interface instead of its name.

> *Changed in 3.14*: Added missing ``IP_FREEBIND``, ``IP_RECVERR``, ``IPV6_RECVERR``, ``IP_RECVTTL``, and ``IP_RECVORIGDSTADDR`` on Linux.

> *Changed in 3.14*: Added support for ``TCP_QUICKACK`` on Windows platforms when available.

> *Changed in 3.15*: ``IPV6_HDRINCL`` was added. Added support for ``SO_PASSRIGHTS`` on Linux platforms when available.
