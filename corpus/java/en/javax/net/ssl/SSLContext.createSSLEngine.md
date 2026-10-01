---
id: "java-en-function-sslcontext-createsslengine"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.createSSLEngine"
signature: "public final SSLEngine createSSLEngine()"
title: "SSLContext.createSSLEngine"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.createSSLEngine

```java
public final SSLEngine createSSLEngine()
```

Creates a new `SSLEngine` using this context.
 

 Applications using this factory method are providing no hints
 for an internal session reuse strategy. If hints are desired,
 `createSSLEngine` should be used
 instead.
 

 Some cipher suites (such as Kerberos) require remote hostname
 information, in which case this factory method should not be used.

 It is provider-specific if the returned SSLEngine uses client or
 server mode by default for the (D)TLS connection. The JDK SunJSSE
 provider implementation uses server mode by default.  However, it
 is recommended to always set the desired mode explicitly by calling
 `setUseClientMode`
 before invoking other methods of the SSLEngine.

**返回**

- the `SSLEngine` object

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation.
- **IllegalStateException** — if the SSLContextImpl requires initialization and the `init()` has not been called

> *Since 1.5*
