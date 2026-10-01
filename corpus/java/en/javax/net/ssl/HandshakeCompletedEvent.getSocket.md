---
id: "java-en-function-handshakecompletedevent-getsocket"
language: "java"
lang: "en"
category: "function"
name: "HandshakeCompletedEvent.getSocket"
signature: "public SSLSocket getSocket()"
title: "HandshakeCompletedEvent.getSocket"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent.getSocket

```java
public SSLSocket getSocket()
```

Returns the socket which is the source of this event.
 (This is a convenience function, to let applications
 write code without type casts.)

**返回**

- the socket on which the connection was made.
