---
id: "java-en-function-datagramsocket-getsotimeout"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getSoTimeout"
signature: "public int getSoTimeout() throws SocketException"
title: "DatagramSocket.getSoTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getSoTimeout

```java
public int getSoTimeout() throws SocketException
```

Retrieve setting for SO_TIMEOUT.  0 returns implies that the
 option is disabled (i.e., timeout of infinity).

**返回**

- the setting for SO_TIMEOUT

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #setSoTimeout(int)

> *Since 1.1*
