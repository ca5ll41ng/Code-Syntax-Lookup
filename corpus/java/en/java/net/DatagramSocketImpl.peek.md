---
id: "java-en-function-datagramsocketimpl-peek"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.peek"
signature: "protected abstract int peek(InetAddress i) throws IOException"
title: "DatagramSocketImpl.peek"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.peek

```java
protected abstract int peek(InetAddress i) throws IOException
```

Peek at the packet to see who it is from. Updates the specified `InetAddress`
 to the address which the packet came from.

**参数**

- **i** — an InetAddress object

**返回**

- the port number which the packet came from.

**异常**

- **IOException** — if an I/O exception occurs
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.
