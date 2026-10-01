---
id: "java-en-function-sslcontextspi-enginegetserversocketfactory"
language: "java"
lang: "en"
category: "function"
name: "SSLContextSpi.engineGetServerSocketFactory"
signature: "protected abstract SSLServerSocketFactory engineGetServerSocketFactory()"
title: "SSLContextSpi.engineGetServerSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContextSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContextSpi.engineGetServerSocketFactory

```java
protected abstract SSLServerSocketFactory engineGetServerSocketFactory()
```

Returns a `ServerSocketFactory` object for
 this context.

**返回**

- the `ServerSocketFactory` object

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.
- **IllegalStateException** — if the SSLContextImpl requires initialization and the `engineInit()` has not been called

**参见**

- javax.net.ssl.SSLContext#getServerSocketFactory()
