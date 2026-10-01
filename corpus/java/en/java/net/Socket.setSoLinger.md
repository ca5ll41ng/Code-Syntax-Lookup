---
id: "java-en-function-socket-setsolinger"
language: "java"
lang: "en"
category: "function"
name: "Socket.setSoLinger"
signature: "public void setSoLinger(boolean on, int linger) throws SocketException"
title: "Socket.setSoLinger"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setSoLinger

```java
public void setSoLinger(boolean on, int linger) throws SocketException
```

Enable/disable `SO_LINGER SO_LINGER` with the
 specified linger time in seconds. The maximum timeout value is platform
 specific.

 The setting only affects socket close.

**参数**

- **on** — whether or not to linger on.
- **linger** — how long to linger for, if on is true.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.
- **IllegalArgumentException** — if the linger value is negative.

**参见**

- #getSoLinger()

> *Since 1.1*
