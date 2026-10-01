---
id: "java-en-function-x509trustmanager-checkservertrusted"
language: "java"
lang: "en"
category: "function"
name: "X509TrustManager.checkServerTrusted"
signature: "void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException"
title: "X509TrustManager.checkServerTrusted"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509TrustManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509TrustManager.checkServerTrusted

```java
void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException
```

Given the partial or complete certificate chain provided by the
 peer, build a certificate path to a trusted root and return if
 it can be validated and is trusted for server SSL
 authentication based on the authentication type.
 

 The authentication type is the key exchange algorithm portion
 of the cipher suites represented as a String, such as "RSA",
 "DHE_DSS". Note: for some exportable cipher suites, the key
 exchange algorithm is determined at run time during the
 handshake. For instance, for TLS_RSA_EXPORT_WITH_RC4_40_MD5,
 the authType should be RSA_EXPORT when an ephemeral RSA key is
 used for the key exchange, and RSA when the key from the server
 certificate is used. Checking is case-sensitive.

**参数**

- **chain** — the peer certificate chain
- **authType** — the key exchange algorithm used

**异常**

- **IllegalArgumentException** — if null or zero-length chain is passed in for the chain parameter or if null or zero-length string is passed in for the  authType parameter
- **CertificateException** — if the certificate chain is not trusted by this TrustManager.
