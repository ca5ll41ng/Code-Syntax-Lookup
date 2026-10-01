---
id: "java-en-function-socket-getsolinger"
language: "java"
lang: "en"
category: "function"
name: "Socket.getSoLinger"
signature: "public int getSoLinger() throws SocketException"
title: "Socket.getSoLinger"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getSoLinger

```java
public int getSoLinger() throws SocketException
```

Returns setting for `SO_LINGER SO_LINGER`.
 -1 returns implies that the
 option is disabled.

 The setting only affects socket close.

**返回**

- the setting for `SO_LINGER`.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setSoLinger(boolean, int)

> *Since 1.1*
