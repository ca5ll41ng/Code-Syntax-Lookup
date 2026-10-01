---
id: "java-en-function-multicastsocket-multicastsocket"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.MulticastSocket"
signature: "public MulticastSocket() throws IOException"
title: "MulticastSocket.MulticastSocket"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.MulticastSocket

```java
public MulticastSocket() throws IOException
```

Constructs a multicast socket and binds it to any available port
 on the local host machine.  The socket will be bound to the
 `isAnyLocalAddress wildcard` address.

 

 When the socket is created the
 `setReuseAddress` method is called to
 enable the SO_REUSEADDR socket option.

**异常**

- **IOException** — if an I/O exception occurs while creating the MulticastSocket

**参见**

- java.net.DatagramSocket#setReuseAddress(boolean)
- java.net.DatagramSocketImpl#setOption(SocketOption, Object)
