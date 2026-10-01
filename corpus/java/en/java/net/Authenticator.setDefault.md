---
id: "java-en-function-authenticator-setdefault"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.setDefault"
signature: "public static synchronized void setDefault(Authenticator a)"
title: "Authenticator.setDefault"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.setDefault

```java
public static synchronized void setDefault(Authenticator a)
```

Sets the authenticator that will be used by the networking code
 when a proxy or an HTTP server asks for authentication.

**参数**

- **a** — The authenticator to be set. If a is `null` then any previously set authenticator is removed.
