---
id: "java-en-function-x509trustmanager-checkclienttrusted"
language: "java"
lang: "en"
category: "function"
name: "X509TrustManager.checkClientTrusted"
signature: "void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException"
title: "X509TrustManager.checkClientTrusted"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509TrustManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509TrustManager.checkClientTrusted

```java
void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException
```

Given the partial or complete certificate chain provided by the
 peer, build a certificate path to a trusted root and return if
 it can be validated and is trusted for client SSL
 authentication based on the authentication type.
 

 The authentication type is determined by the actual certificate
 used. For instance, if RSAPublicKey is used, the authType
 should be "RSA". Checking is case-sensitive.

**参数**

- **chain** — the peer certificate chain
- **authType** — the authentication type based on the client certificate

**异常**

- **IllegalArgumentException** — if null or zero-length chain is passed in for the chain parameter or if null or zero-length string is passed in for the  authType parameter
- **CertificateException** — if the certificate chain is not trusted by this TrustManager.
