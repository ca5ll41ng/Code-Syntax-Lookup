---
id: "java-en-function-sslsession-getpeercertificates"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getPeerCertificates"
signature: "java.security.cert.Certificate [] getPeerCertificates() throws SSLPeerUnverifiedException"
title: "SSLSession.getPeerCertificates"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getPeerCertificates

```java
java.security.cert.Certificate [] getPeerCertificates() throws SSLPeerUnverifiedException
```

Returns the identity of the peer which was established as part
 of defining the session.
 

 Note: This method can be used only when using certificate-based
 cipher suites; using it with non-certificate-based cipher suites,
 such as Kerberos, will throw an SSLPeerUnverifiedException.
 

 Note: The returned value may not be a valid certificate chain
 and should not be relied on for trust decisions.

**返回**

- an ordered array of peer certificates, with the peer's own certificate first followed by any certificate authorities.

**异常**

- **SSLPeerUnverifiedException** — if the peer's identity has not been verified

**参见**

- #getPeerPrincipal()
