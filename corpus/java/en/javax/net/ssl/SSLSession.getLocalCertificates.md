---
id: "java-en-function-sslsession-getlocalcertificates"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getLocalCertificates"
signature: "java.security.cert.Certificate [] getLocalCertificates()"
title: "SSLSession.getLocalCertificates"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getLocalCertificates

```java
java.security.cert.Certificate [] getLocalCertificates()
```

Returns the certificate(s) that were sent to the peer during
 handshaking.
 

 Note: This method is useful only when using certificate-based
 cipher suites.
 

 When multiple certificates are available for use in a
 handshake, the implementation chooses what it considers the
 "best" certificate chain available, and transmits that to
 the other side.  This method allows the caller to know
 which certificate chain was actually used.

**返回**

- an ordered array of certificates, with the local certificate first followed by any certificate authorities.  If no certificates were sent, then null is returned.

**参见**

- #getLocalPrincipal()
