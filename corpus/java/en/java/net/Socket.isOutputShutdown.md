---
id: "java-en-function-socket-isoutputshutdown"
language: "java"
lang: "en"
category: "function"
name: "Socket.isOutputShutdown"
signature: "public boolean isOutputShutdown()"
title: "Socket.isOutputShutdown"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.isOutputShutdown

```java
public boolean isOutputShutdown()
```

Returns `true` if the socket was shutdown for writing.

**返回**

- true only if a prior call to `shutdownOutput` completed successfully, false otherwise

> *Since 1.4*
