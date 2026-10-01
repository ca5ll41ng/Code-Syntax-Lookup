---
id: "java-en-function-sslengine-getneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getNeedClientAuth"
signature: "public abstract boolean getNeedClientAuth()"
title: "SSLEngine.getNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getNeedClientAuth

```java
public abstract boolean getNeedClientAuth()
```

Returns true if the engine will require client authentication.
 This option is only useful to engines in the server mode.

**返回**

- true if client authentication is required, or false if no client authentication is desired.

**参见**

- #setNeedClientAuth(boolean)
- #setWantClientAuth(boolean)
- #getWantClientAuth()
- #setUseClientMode(boolean)
