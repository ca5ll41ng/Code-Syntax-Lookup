---
id: "java-en-function-sslparameters-setendpointidentificationalgorithm"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setEndpointIdentificationAlgorithm"
signature: "public void setEndpointIdentificationAlgorithm(String algorithm)"
title: "SSLParameters.setEndpointIdentificationAlgorithm"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setEndpointIdentificationAlgorithm

```java
public void setEndpointIdentificationAlgorithm(String algorithm)
```

Sets the endpoint identification algorithm.
 

 If the `algorithm` parameter is non-null or non-empty, the
 endpoint identification/verification procedures must be handled during
 SSL/TLS/DTLS handshaking.  This is to prevent man-in-the-middle attacks.

**参数**

- **algorithm** — The standard string name of the endpoint identification algorithm (or null). See the Java Security Standard Algorithm Names document for information about standard algorithm names.

**参见**

- X509ExtendedTrustManager

> *Since 1.7*
