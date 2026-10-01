---
id: "java-en-function-sslengine-getwantclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getWantClientAuth"
signature: "public abstract boolean getWantClientAuth()"
title: "SSLEngine.getWantClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getWantClientAuth

```java
public abstract boolean getWantClientAuth()
```

Returns true if the engine will request client authentication.
 This option is only useful for engines in the server mode.

**返回**

- true if client authentication is requested, or false if no client authentication is desired.

**参见**

- #setNeedClientAuth(boolean)
- #getNeedClientAuth()
- #setWantClientAuth(boolean)
- #setUseClientMode(boolean)
