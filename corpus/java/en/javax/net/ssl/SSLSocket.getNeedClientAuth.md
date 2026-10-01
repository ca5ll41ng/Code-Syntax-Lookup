---
id: "java-en-function-sslsocket-getneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getNeedClientAuth"
signature: "public abstract boolean getNeedClientAuth()"
title: "SSLSocket.getNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getNeedClientAuth

```java
public abstract boolean getNeedClientAuth()
```

Returns true if the socket will require client authentication.
 This option is only useful to sockets in the server mode.

**返回**

- true if client authentication is required, or false if no client authentication is desired.

**参见**

- #setNeedClientAuth(boolean)
- #setWantClientAuth(boolean)
- #getWantClientAuth()
- #setUseClientMode(boolean)
