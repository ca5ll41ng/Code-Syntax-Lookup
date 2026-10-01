---
id: "java-en-function-handshakecompletedevent-getpeercertificates"
language: "java"
lang: "en"
category: "function"
name: "HandshakeCompletedEvent.getPeerCertificates"
signature: "public java.security.cert.Certificate [] getPeerCertificates() throws SSLPeerUnverifiedException"
title: "HandshakeCompletedEvent.getPeerCertificates"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent.getPeerCertificates

```java
public java.security.cert.Certificate [] getPeerCertificates() throws SSLPeerUnverifiedException
```

Returns the identity of the peer which was established as part
 of defining the session.
 Note: This method can be used only when using certificate-based
 cipher suites; using it with non-certificate-based cipher suites,
 such as Kerberos, will throw an SSLPeerUnverifiedException.
 

 Note: The returned value may not be a valid certificate chain
 and should not be relied on for trust decisions.

**返回**

- an ordered array of the peer certificates, with the peer's own certificate first followed by any certificate authorities.

**异常**

- **SSLPeerUnverifiedException** — if the peer is not verified.

**参见**

- #getPeerPrincipal()
