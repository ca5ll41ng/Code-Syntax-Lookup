---
id: "java-en-function-sslcontext-getsupportedsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getSupportedSSLParameters"
signature: "public final SSLParameters getSupportedSSLParameters()"
title: "SSLContext.getSupportedSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getSupportedSSLParameters

```java
public final SSLParameters getSupportedSSLParameters()
```

Returns a copy of the SSLParameters indicating the supported
 settings for this SSL context.

 

The parameters will always have the ciphersuites and protocols
 arrays set to non-null values.

**返回**

- a copy of the SSLParameters object with the supported settings

**异常**

- **UnsupportedOperationException** — if the supported SSL parameters could not be obtained.

> *Since 1.6*
