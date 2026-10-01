---
id: "en-php-guide-class-zmq"
language: "php"
lang: "en"
category: "guide"
name: "class.zmq"
title: "The ZMQ class"
module: "zmq"
source_url: "https://www.php.net/manual/en/class.zmq.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ZMQ class

ZMQ

   Introduction       Class Synopsis   `ZMQ`    `ZMQ`      `const` `int` `ZMQ::SOCKET_PAIR`   `const` `int` `ZMQ::SOCKET_PUB`   `const` `int` `ZMQ::SOCKET_SUB`   `const` `int` `ZMQ::SOCKET_REQ`   `const` `int` `ZMQ::SOCKET_REP`   `const` `int` `ZMQ::SOCKET_XREQ`   `const` `int` `ZMQ::SOCKET_XREP`   `const` `int` `ZMQ::SOCKET_PUSH`   `const` `int` `ZMQ::SOCKET_PULL`   `const` `int` `ZMQ::SOCKET_ROUTER`   `const` `int` `ZMQ::SOCKET_DEALER`   `const` `int` `ZMQ::SOCKET_XPUB`   `const` `int` `ZMQ::SOCKET_XSUB`   `const` `int` `ZMQ::SOCKET_STREAM`   `const` `int` `ZMQ::SOCKOPT_HWM`   `const` `int` `ZMQ::SOCKOPT_SNDHWM`   `const` `int` `ZMQ::SOCKOPT_RCVHWM`   `const` `int` `ZMQ::SOCKOPT_AFFINITY`   `const` `int` `ZMQ::SOCKOPT_IDENTITY`   `const` `int` `ZMQ::SOCKOPT_SUBSCRIBE`   `const` `int` `ZMQ::SOCKOPT_UNSUBSCRIBE`   `const` `int` `ZMQ::SOCKOPT_RATE`   `const` `int` `ZMQ::SOCKOPT_RECOVERY_IVL`   `const` `int` `ZMQ::SOCKOPT_RECONNECT_IVL`   `const` `int` `ZMQ::SOCKOPT_RECONNECT_IVL_MAX`   `const` `int` `ZMQ::SOCKOPT_MCAST_LOOP`   `const` `int` `ZMQ::SOCKOPT_SNDBUF`   `const` `int` `ZMQ::SOCKOPT_RCVBUF`   `const` `int` `ZMQ::SOCKOPT_RCVMORE`   `const` `int` `ZMQ::SOCKOPT_TYPE`   `const` `int` `ZMQ::SOCKOPT_LINGER`   `const` `int` `ZMQ::SOCKOPT_BACKLOG`   `const` `int` `ZMQ::SOCKOPT_MAXMSGSIZE`   `const` `int` `ZMQ::SOCKOPT_SNDTIMEO`   `const` `int` `ZMQ::SOCKOPT_RCVTIMEO`   `const` `int` `ZMQ::SOCKOPT_IPV4ONLY`   `const` `int` `ZMQ::SOCKOPT_LAST_ENDPOINT`   `const` `int` `ZMQ::SOCKOPT_TCP_KEEPALIVE_IDLE`   `const` `int` `ZMQ::SOCKOPT_TCP_KEEPALIVE_CNT`   `const` `int` `ZMQ::SOCKOPT_TCP_KEEPALIVE_INTVL`   `const` `int` `ZMQ::SOCKOPT_TCP_ACCEPT_FILTER`   `const` `int` `ZMQ::SOCKOPT_TCP_ACCEPT_FILTER`   `const` `int` `ZMQ::SOCKOPT_DELAY_ATTACH_ON_CONNECT`   `const` `int` `ZMQ::SOCKOPT_XPUB_VERBOSE`   `const` `int` `ZMQ::SOCKOPT_ROUTER_RAW`   `const` `int` `ZMQ::SOCKOPT_IPV6`   `const` `int` `ZMQ::CTXOPT_MAX_SOCKETS`   `const` `int` `ZMQ::POLL_IN`   `const` `int` `ZMQ::POLL_OUT`   `const` `int` `ZMQ::MODE_NOBLOCK`   `const` `int` `ZMQ::MODE_DONTWAIT`   `const` `int` `ZMQ::MODE_SNDMORE`   `const` `int` `ZMQ::ERR_INTERNAL`   `const` `int` `ZMQ::ERR_EAGAIN`   `const` `int` `ZMQ::ERR_ENOTSUP`   `const` `int` `ZMQ::ERR_EFSM`   `const` `int` `ZMQ::ERR_ETERM`         Predefined Constants  ZMQ Constant Types 
- **`ZMQ::SOCKET_PAIR`** — Exclusive pair pattern
- **`ZMQ::SOCKET_PUB`** — Publisher socket
- **`ZMQ::SOCKET_SUB`** — Subscriber socket
- **`ZMQ::SOCKET_REQ`** — Request socket
- **`ZMQ::SOCKET_REP`** — Reply socket
- **`ZMQ::SOCKET_XREQ`** — Alias for SOCKET_DEALER
- **`ZMQ::SOCKET_XREP`** — Alias for SOCKET_ROUTER
- **`ZMQ::SOCKET_PUSH`** — Pipeline upstream push socket
- **`ZMQ::SOCKET_PULL`** — Pipeline downstream pull socket
- **`ZMQ::SOCKET_ROUTER`** — Extended REP socket that can route replies to requesters
- **`ZMQ::SOCKET_DEALER`** — Extended REQ socket that load balances to all connected peers
- **`ZMQ::SOCKET_XPUB`** — Similar to SOCKET_PUB, except you can receive subscriptions as messages. The subscription message is 0 (unsubscribe) or 1 (subscribe) followed by the topic.
- **`ZMQ::SOCKET_XSUB`** — Similar to SOCKET_SUB, except you can send subscriptions as messages. See SOCKET_XPUB for format.
- **`ZMQ::SOCKET_STREAM`** — Used to send and receive TCP data from a non-ØMQ peer. Available if compiled against ZeroMQ 4.x or higher (Value: `integer`).
- **`ZMQ::SOCKOPT_HWM`** — The high water mark for inbound and outbound messages is a hard limit on the maximum number of outstanding messages ØMQ shall queue in memory for any single peer that the specified socket is communicating with. Setting this option on a socket will only affect connections made after the option has been set. On ZeroMQ 3.x this is a wrapper for setting both SNDHWM and RCVHWM. (Value: `integer`).
- **`ZMQ::SOCKOPT_SNDHWM`** — The ZMQ_SNDHWM option shall set the high water mark for outbound messages on the specified socket. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`).
- **`ZMQ::SOCKOPT_RCVHWM`** — The SOCKOPT_RCVHWM option shall set the high water mark for inbound messages on the specified socket. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`).
- **`ZMQ::SOCKOPT_AFFINITY`** — Set I/O thread affinity (Value: `integer`)
- **`ZMQ::SOCKOPT_IDENTITY`** — Set socket identity (Value: `string`)
- **`ZMQ::SOCKOPT_SUBSCRIBE`** — Establish message filter. Valid for subscriber socket (Value: `string`)
- **`ZMQ::SOCKOPT_UNSUBSCRIBE`** — Remove message filter. Valid for subscriber socket (Value: `string`)
- **`ZMQ::SOCKOPT_RATE`** — Set rate for multicast sockets (pgm) (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_RECOVERY_IVL`** — Set multicast recovery interval (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_RECONNECT_IVL`** — Set the initial reconnection interval (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_RECONNECT_IVL_MAX`** — Set the max reconnection interval (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_MCAST_LOOP`** — Control multicast loopback (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_SNDBUF`** — Set kernel transmit buffer size (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_RCVBUF`** — Set kernel receive buffer size (Value: `integer` >= 0)
- **`ZMQ::SOCKOPT_RCVMORE`** — Receive multi-part messages (Value: `integer`)
- **`ZMQ::SOCKOPT_TYPE`** — Get the socket type. Valid for getSockOpt (Value: `integer`)
- **`ZMQ::SOCKOPT_LINGER`** — The linger value of the socket. Specifies how long the socket blocks trying flush messages after it has been closed (Value: `integer`)
- **`ZMQ::SOCKOPT_BACKLOG`** — The SOCKOPT_BACKLOG option shall set the maximum length of the queue of outstanding peer connections for the specified socket; this only applies to connection-oriented transports. (Value: `integer`)
- **`ZMQ::SOCKOPT_MAXMSGSIZE`** — Limits the maximum size of the inbound message. Value -1 means no limit. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_SNDTIMEO`** — Sets the timeout for send operation on the socket. Value -1 means no limit. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_RCVTIMEO`** — Sets the timeout for receive operation on the socket. Value -1 means no limit. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_IPV4ONLY`** — Disable IPV6 support if 1. Available if compiled against ZeroMQ 3.x (Value: `integer`)
- **`ZMQ::SOCKOPT_LAST_ENDPOINT`** — Retrieve the last connected endpoint - for use with * wildcard ports. Available if compiled against ZeroMQ 3.x or higher (Value: `string`)
- **`ZMQ::SOCKOPT_TCP_KEEPALIVE_IDLE`** — Idle time for TCP keepalive. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_TCP_KEEPALIVE_CNT`** — Count time for TCP keepalive. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_TCP_KEEPALIVE_INTVL`** — Interval for TCP keepalive. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::SOCKOPT_DELAY_ATTACH_ON_CONNECT`** — Set a CIDR string to match against incoming TCP connections. Available if compiled against ZeroMQ 3.x or higher (Value: `string`)
- **`ZMQ::SOCKOPT_TCP_ACCEPT_FILTER`** — Set a CIDR string to match against incoming TCP connections. Available if compiled against ZeroMQ 3.x or higher (Value: `string`)
- **`ZMQ::SOCKOPT_XPUB_VERBOSE`** — Set the XPUB to receive an application message on each instance of a subscription. Available if compiled against ZeroMQ 3.x or higher (Value: `string`)
- **`ZMQ::SOCKOPT_ROUTER_RAW`** — Sets the raw mode on the ROUTER, when set to 1. In raw mode when using tcp:// transport the socket will read and write without ZeroMQ framing. Available if compiled against ZeroMQ 4.0 or higher (Value: `string`)
- **`ZMQ::SOCKOPT_IPV6`** — Enable IPV6. Available if compiled against ZeroMQ 4.0 or higher (Value: `string`)
- **`ZMQ::CTXOPT_MAX_SOCKETS`** — The socket limit for this context. Available if compiled against ZeroMQ 3.x or higher (Value: `integer`)
- **`ZMQ::POLL_IN`** — Poll for incoming data
- **`ZMQ::POLL_OUT`** — Poll for outgoing data
- **`ZMQ::MODE_NOBLOCK`** — Non-blocking operation. Deprecated, use ZMQ::MODE_DONTWAIT instead
- **`ZMQ::MODE_DONTWAIT`** — Non-blocking operation
- **`ZMQ::MODE_SNDMORE`** — Send multi-part message
- **`ZMQ::DEVICE_FORWARDER`** — Forwarder device
- **`ZMQ::DEVICE_QUEUE`** — Queue device
- **`ZMQ::DEVICE_STREAMER`** — Streamer device
- **`ZMQ::ERR_INTERNAL`** — ZMQ extension internal error
- **`ZMQ::ERR_EAGAIN`** — Implies that the operation would block when ZMQ::MODE_DONTWAIT is used
- **`ZMQ::ERR_ENOTSUP`** — The operation is not supported by the socket type
- **`ZMQ::ERR_EFSM`** — The operation can not be executed because the socket is not in correct state
- **`ZMQ::ERR_ETERM`** — The context has been terminated
