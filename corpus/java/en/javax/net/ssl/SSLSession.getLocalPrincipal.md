---
id: "java-en-function-sslsession-getlocalprincipal"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getLocalPrincipal"
signature: "Principal getLocalPrincipal()"
title: "SSLSession.getLocalPrincipal"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getLocalPrincipal

```java
Principal getLocalPrincipal()
```

Returns the principal that was sent to the peer during handshaking.

**返回**

- the principal sent to the peer. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites. If no principal was sent, then null is returned.

**参见**

- #getLocalCertificates()
- #getPeerPrincipal()

> *Since 1.5*
