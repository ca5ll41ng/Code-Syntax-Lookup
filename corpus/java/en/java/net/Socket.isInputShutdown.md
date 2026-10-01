---
id: "java-en-function-socket-isinputshutdown"
language: "java"
lang: "en"
category: "function"
name: "Socket.isInputShutdown"
signature: "public boolean isInputShutdown()"
title: "Socket.isInputShutdown"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.isInputShutdown

```java
public boolean isInputShutdown()
```

Returns `true` if the socket was shutdown for reading.

**返回**

- true only if a prior call to `shutdownInput` completed successfully, false otherwise

> *Since 1.4*
