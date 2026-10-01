---
id: "java-en-function-datagramsocket-setsotimeout"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setSoTimeout"
signature: "public void setSoTimeout(int timeout) throws SocketException"
title: "DatagramSocket.setSoTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setSoTimeout

```java
public void setSoTimeout(int timeout) throws SocketException
```

Enable/disable SO_TIMEOUT with the specified timeout, in
 milliseconds. With this option set to a positive timeout value,
 a call to receive() for this DatagramSocket
 will block for only this amount of time.  If the timeout expires,
 a **java.net.SocketTimeoutException** is raised, though the
 DatagramSocket is still valid. A timeout of zero is interpreted
 as an infinite timeout.
 The option **must** be enabled prior to entering the blocking
 operation to have effect.

**参数**

- **timeout** — the specified timeout in milliseconds.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.
- **IllegalArgumentException** — if `timeout` is negative

**参见**

- #getSoTimeout()

> *Since 1.1*
