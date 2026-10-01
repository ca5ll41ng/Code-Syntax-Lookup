---
id: "java-en-function-sslcontextspi-enginegetdefaultsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLContextSpi.engineGetDefaultSSLParameters"
signature: "protected SSLParameters engineGetDefaultSSLParameters()"
title: "SSLContextSpi.engineGetDefaultSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContextSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContextSpi.engineGetDefaultSSLParameters

```java
protected SSLParameters engineGetDefaultSSLParameters()
```

Returns a copy of the SSLParameters indicating the default
 settings for this SSL context.

 

The parameters will always have the ciphersuite and protocols
 arrays set to non-null values.

 

The default implementation obtains the parameters from an
 SSLSocket created by calling the
 `createSocket
 SocketFactory.createSocket` method of this context's SocketFactory.

**返回**

- a copy of the SSLParameters object with the default settings

**异常**

- **UnsupportedOperationException** — if the default SSL parameters could not be obtained.

> *Since 1.6*
