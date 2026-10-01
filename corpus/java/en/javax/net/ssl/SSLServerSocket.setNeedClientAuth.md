---
id: "java-en-function-sslserversocket-setneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setNeedClientAuth"
signature: "public abstract void setNeedClientAuth(boolean need)"
title: "SSLServerSocket.setNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setNeedClientAuth

```java
public abstract void setNeedClientAuth(boolean need)
```

Controls whether accepted server-mode
 SSLSockets will be initially configured to
 require client authentication.
 

 A socket's client authentication setting is one of the following:
 
 
-  client authentication required
 
-  client authentication requested
 
-  no client authentication desired
 

 

 Unlike `setWantClientAuth`, if the accepted
 socket's option is set and the client chooses not to provide
 authentication information about itself, the negotiations
 will stop and the connection will be dropped.
 

 Calling this method overrides any previous setting made by
 this method or `setWantClientAuth`.
 

 The initial inherited setting may be overridden by calling
 `setNeedClientAuth` or
 `setWantClientAuth`.

**参数**

- **need** — set to true if client authentication is required, or false if no client authentication is desired.

**参见**

- #getNeedClientAuth()
- #setWantClientAuth(boolean)
- #getWantClientAuth()
- #setUseClientMode(boolean)
