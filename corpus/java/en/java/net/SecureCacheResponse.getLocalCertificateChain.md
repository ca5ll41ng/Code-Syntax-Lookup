---
id: "java-en-function-securecacheresponse-getlocalcertificatechain"
language: "java"
lang: "en"
category: "function"
name: "SecureCacheResponse.getLocalCertificateChain"
signature: "public abstract List<Certificate> getLocalCertificateChain()"
title: "SecureCacheResponse.getLocalCertificateChain"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SecureCacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureCacheResponse.getLocalCertificateChain

```java
public abstract List<Certificate> getLocalCertificateChain()
```

Returns the certificate chain that were sent to the server during
 handshaking of the original connection that retrieved the
 network resource.  Note: This method is useful only
 when using certificate-based cipher suites.

**返回**

- an immutable List of Certificate representing the certificate chain that was sent to the server. If no certificate chain was sent, null will be returned.

**参见**

- #getLocalPrincipal()
