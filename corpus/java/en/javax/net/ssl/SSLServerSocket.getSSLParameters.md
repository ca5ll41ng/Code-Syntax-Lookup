---
id: "java-en-function-sslserversocket-getsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getSSLParameters"
signature: "public SSLParameters getSSLParameters()"
title: "SSLServerSocket.getSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getSSLParameters

```java
public SSLParameters getSSLParameters()
```

Returns the SSLParameters in effect for newly accepted connections.
 The ciphersuites and protocols of the returned SSLParameters
 are always non-null.

**返回**

- the SSLParameters in effect for newly accepted connections

**参见**

- #setSSLParameters(SSLParameters)

> *Since 1.7*
