---
id: "java-en-function-sslengine-setwantclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.setWantClientAuth"
signature: "public abstract void setWantClientAuth(boolean want)"
title: "SSLEngine.setWantClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.setWantClientAuth

```java
public abstract void setWantClientAuth(boolean want)
```

Configures the engine to request client authentication.
 This option is only useful for engines in the server mode.
 

 An engine's client authentication setting is one of the following:
 
 
-  client authentication required
 
-  client authentication requested
 
-  no client authentication desired
 

 

 Unlike `setNeedClientAuth`, if this option is set and
 the client chooses not to provide authentication information
 about itself, the negotiations will continue.
 

 Calling this method overrides any previous setting made by
 this method or `setNeedClientAuth`.

**参数**

- **want** — set to true if client authentication is requested, or false if no client authentication is desired.

**参见**

- #getWantClientAuth()
- #setNeedClientAuth(boolean)
- #getNeedClientAuth()
- #setUseClientMode(boolean)
