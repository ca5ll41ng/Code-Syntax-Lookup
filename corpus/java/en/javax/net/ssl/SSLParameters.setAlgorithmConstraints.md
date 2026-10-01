---
id: "java-en-function-sslparameters-setalgorithmconstraints"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setAlgorithmConstraints"
signature: "public void setAlgorithmConstraints(AlgorithmConstraints constraints)"
title: "SSLParameters.setAlgorithmConstraints"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setAlgorithmConstraints

```java
public void setAlgorithmConstraints(AlgorithmConstraints constraints)
```

Sets the cryptographic algorithm constraints, which will be used
 in addition to any configured by the runtime environment.
 

 If the `constraints` parameter is non-null, every
 cryptographic algorithm, key and algorithm parameters used in the
 SSL/TLS/DTLS handshake must be permitted by the constraints.

**参数**

- **constraints** — the algorithm constraints (or null)

> *Since 1.7*
