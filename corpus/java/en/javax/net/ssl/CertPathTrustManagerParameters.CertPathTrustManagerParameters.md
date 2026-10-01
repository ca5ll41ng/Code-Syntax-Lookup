---
id: "java-en-function-certpathtrustmanagerparameters-certpathtrustmanagerparameters"
language: "java"
lang: "en"
category: "function"
name: "CertPathTrustManagerParameters.CertPathTrustManagerParameters"
signature: "public CertPathTrustManagerParameters(CertPathParameters parameters)"
title: "CertPathTrustManagerParameters.CertPathTrustManagerParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/CertPathTrustManagerParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathTrustManagerParameters.CertPathTrustManagerParameters

```java
public CertPathTrustManagerParameters(CertPathParameters parameters)
```

Construct new CertPathTrustManagerParameters from the specified
 parameters. The parameters are cloned to protect against subsequent
 modification.

**参数**

- **parameters** — the CertPathParameters to be used

**异常**

- **NullPointerException** — if parameters is null
