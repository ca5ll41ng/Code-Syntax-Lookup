---
id: "java-en-function-sslserversocket-getneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getNeedClientAuth"
signature: "public abstract boolean getNeedClientAuth()"
title: "SSLServerSocket.getNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getNeedClientAuth

```java
public abstract boolean getNeedClientAuth()
```

Returns true if client authentication will be required on
 newly accepted server-mode SSLSockets.
 

 The initial inherited setting may be overridden by calling
 `setNeedClientAuth` or
 `setWantClientAuth`.

**返回**

- true if client authentication is required, or false if no client authentication is desired.

**参见**

- #setNeedClientAuth(boolean)
- #setWantClientAuth(boolean)
- #getWantClientAuth()
- #setUseClientMode(boolean)
