---
id: "java-en-function-sslengine-setneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.setNeedClientAuth"
signature: "public abstract void setNeedClientAuth(boolean need)"
title: "SSLEngine.setNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.setNeedClientAuth

```java
public abstract void setNeedClientAuth(boolean need)
```

Configures the engine to require client authentication.  This
 option is only useful for engines in the server mode.
 

 An engine's client authentication setting is one of the following:
 
 
-  client authentication required
 
-  client authentication requested
 
-  no client authentication desired
 

 

 Unlike `setWantClientAuth`, if this option is set and
 the client chooses not to provide authentication information
 about itself, the negotiations will stop and the engine will
 begin its closure procedure.
 

 Calling this method overrides any previous setting made by
 this method or `setWantClientAuth`.

**参数**

- **need** — set to true if client authentication is required, or false if no client authentication is desired.

**参见**

- #getNeedClientAuth()
- #setWantClientAuth(boolean)
- #getWantClientAuth()
- #setUseClientMode(boolean)
