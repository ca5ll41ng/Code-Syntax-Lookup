---
id: "java-en-function-datagramsocket-disconnect"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.disconnect"
signature: "public void disconnect()"
title: "DatagramSocket.disconnect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.disconnect

```java
public void disconnect()
```

Disconnects the socket. If the socket is closed or not connected,
 then this method has no effect.

          may be left in an unspecified state. It is strongly
          recommended that the socket be closed when disconnect
          fails.

**异常**

- **UncheckedIOException** — may be thrown if disconnect fails to dissolve the association and restore the socket to a consistent state.

**参见**

- #connect

> *Since 1.2*
