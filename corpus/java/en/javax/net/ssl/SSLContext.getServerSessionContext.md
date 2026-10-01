---
id: "java-en-function-sslcontext-getserversessioncontext"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getServerSessionContext"
signature: "public final SSLSessionContext getServerSessionContext()"
title: "SSLContext.getServerSessionContext"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getServerSessionContext

```java
public final SSLSessionContext getServerSessionContext()
```

Returns the server session context, which represents the set of
 SSL sessions available for use during the handshake phase of
 server-side SSL sockets.
 

 This context may be unavailable in some environments, in which
 case this method returns null. For example, when the underlying
 SSL provider does not provide an implementation of SSLSessionContext
 interface, this method returns null. A non-null session context
 is returned otherwise.

**返回**

- server session context bound to this SSL context
