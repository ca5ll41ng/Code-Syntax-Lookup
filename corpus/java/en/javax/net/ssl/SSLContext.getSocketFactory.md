---
id: "java-en-function-sslcontext-getsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getSocketFactory"
signature: "public final SSLSocketFactory getSocketFactory()"
title: "SSLContext.getSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getSocketFactory

```java
public final SSLSocketFactory getSocketFactory()
```

Returns a `SocketFactory` object for this
 context.

**返回**

- the `SocketFactory` object

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.
- **IllegalStateException** — if the SSLContextImpl requires initialization and the `init()` has not been called
