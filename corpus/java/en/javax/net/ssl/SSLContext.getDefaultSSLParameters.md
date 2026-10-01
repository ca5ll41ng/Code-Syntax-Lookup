---
id: "java-en-function-sslcontext-getdefaultsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getDefaultSSLParameters"
signature: "public final SSLParameters getDefaultSSLParameters()"
title: "SSLContext.getDefaultSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getDefaultSSLParameters

```java
public final SSLParameters getDefaultSSLParameters()
```

Returns a copy of the SSLParameters indicating the default
 settings for this SSL context.

 

The parameters will always have the ciphersuites and protocols
 arrays set to non-null values.

**返回**

- a copy of the SSLParameters object with the default settings

**异常**

- **UnsupportedOperationException** — if the default SSL parameters could not be obtained.

> *Since 1.6*
