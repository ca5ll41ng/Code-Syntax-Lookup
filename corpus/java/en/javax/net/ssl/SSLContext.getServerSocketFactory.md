---
id: "java-en-function-sslcontext-getserversocketfactory"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getServerSocketFactory"
signature: "public final SSLServerSocketFactory getServerSocketFactory()"
title: "SSLContext.getServerSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getServerSocketFactory

```java
public final SSLServerSocketFactory getServerSocketFactory()
```

Returns a `ServerSocketFactory` object for
 this context.

**返回**

- the `ServerSocketFactory` object

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.
- **IllegalStateException** — if the SSLContextImpl requires initialization and the `init()` has not been called
