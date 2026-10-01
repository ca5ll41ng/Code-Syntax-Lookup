---
id: "java-en-function-sslcontextspi-enginegetsupportedsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLContextSpi.engineGetSupportedSSLParameters"
signature: "protected SSLParameters engineGetSupportedSSLParameters()"
title: "SSLContextSpi.engineGetSupportedSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContextSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContextSpi.engineGetSupportedSSLParameters

```java
protected SSLParameters engineGetSupportedSSLParameters()
```

Returns a copy of the SSLParameters indicating the maximum supported
 settings for this SSL context.

 

The parameters will always have the ciphersuite and protocols
 arrays set to non-null values.

 

The default implementation obtains the parameters from an
 SSLSocket created by calling the
 `createSocket
 SocketFactory.createSocket` method of this context's SocketFactory.

**返回**

- a copy of the SSLParameters object with the maximum supported settings

**异常**

- **UnsupportedOperationException** — if the supported SSL parameters could not be obtained.

> *Since 1.6*
