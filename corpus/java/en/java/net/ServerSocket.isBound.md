---
id: "java-en-function-serversocket-isbound"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.isBound"
signature: "public boolean isBound()"
title: "ServerSocket.isBound"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.isBound

```java
public boolean isBound()
```

Returns the binding state of the ServerSocket.
 

 If the socket was bound prior to being `close closed`,
 then this method will continue to return `true`
 after the socket is closed.

**返回**

- true if the ServerSocket successfully bound to an address

> *Since 1.4*
