---
id: "java-en-function-sslserversocket-setwantclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setWantClientAuth"
signature: "public abstract void setWantClientAuth(boolean want)"
title: "SSLServerSocket.setWantClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setWantClientAuth

```java
public abstract void setWantClientAuth(boolean want)
```

Controls whether accepted server-mode
 SSLSockets will be initially configured to
 request client authentication.
 

 A socket's client authentication setting is one of the following:
 
 
-  client authentication required
 
-  client authentication requested
 
-  no client authentication desired
 

 

 Unlike `setNeedClientAuth`, if the accepted
 socket's option is set and the client chooses not to provide
 authentication information about itself, the negotiations
 will continue.
 

 Calling this method overrides any previous setting made by
 this method or `setNeedClientAuth`.
 

 The initial inherited setting may be overridden by calling
 `setNeedClientAuth` or
 `setWantClientAuth`.

**参数**

- **want** — set to true if client authentication is requested, or false if no client authentication is desired.

**参见**

- #getWantClientAuth()
- #setNeedClientAuth(boolean)
- #getNeedClientAuth()
- #setUseClientMode(boolean)
