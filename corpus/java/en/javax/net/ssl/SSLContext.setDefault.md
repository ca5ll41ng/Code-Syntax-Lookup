---
id: "java-en-function-sslcontext-setdefault"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.setDefault"
signature: "public static void setDefault(SSLContext context)"
title: "SSLContext.setDefault"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.setDefault

```java
public static void setDefault(SSLContext context)
```

Sets the default SSL context. It will be returned by subsequent calls
 to `getDefault`. The default context must be immediately usable
 and not require `init initialization`.

**参数**

- **context** — the SSLContext

**异常**

- **NullPointerException** — if context is null

> *Since 1.6*
