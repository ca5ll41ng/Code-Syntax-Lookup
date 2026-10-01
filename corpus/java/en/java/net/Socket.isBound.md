---
id: "java-en-function-socket-isbound"
language: "java"
lang: "en"
category: "function"
name: "Socket.isBound"
signature: "public boolean isBound()"
title: "Socket.isBound"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.isBound

```java
public boolean isBound()
```

Returns the binding state of the socket.
 

 `close() Closing` a socket doesn't clear its binding state, which means
 this method will return `true` for a closed socket
 if it was successfully bound prior to being closed.

**返回**

- true if the socket was successfully bound to an address

**参见**

- #bind

> *Since 1.4*
