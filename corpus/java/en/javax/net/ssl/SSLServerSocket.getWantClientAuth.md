---
id: "java-en-function-sslserversocket-getwantclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getWantClientAuth"
signature: "public abstract boolean getWantClientAuth()"
title: "SSLServerSocket.getWantClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getWantClientAuth

```java
public abstract boolean getWantClientAuth()
```

Returns true if client authentication will be requested on
 newly accepted server-mode connections.
 

 The initial inherited setting may be overridden by calling
 `setNeedClientAuth` or
 `setWantClientAuth`.

**返回**

- true if client authentication is requested, or false if no client authentication is desired.

**参见**

- #setWantClientAuth(boolean)
- #setNeedClientAuth(boolean)
- #getNeedClientAuth()
- #setUseClientMode(boolean)
