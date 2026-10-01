---
id: "java-en-function-securecacheresponse-getlocalprincipal"
language: "java"
lang: "en"
category: "function"
name: "SecureCacheResponse.getLocalPrincipal"
signature: "public abstract Principal getLocalPrincipal()"
title: "SecureCacheResponse.getLocalPrincipal"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SecureCacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureCacheResponse.getLocalPrincipal

```java
public abstract Principal getLocalPrincipal()
```

Returns the principal that was sent to the server during
 handshaking in the original connection that retrieved the
 network resource.

**返回**

- the principal sent to the server. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites. If no principal was sent, then null is returned.

**参见**

- #getLocalCertificateChain()
- #getPeerPrincipal()
