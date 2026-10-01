---
id: "java-en-function-trustanchor-getnameconstraints"
language: "java"
lang: "en"
category: "function"
name: "TrustAnchor.getNameConstraints"
signature: "public final byte [] getNameConstraints()"
title: "TrustAnchor.getNameConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/TrustAnchor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustAnchor.getNameConstraints

```java
public final byte [] getNameConstraints()
```

Returns the name constraints parameter. The specified name constraints
 are associated with this trust anchor and are intended to be used
 as additional constraints when validating an X.509 certification path.
 

 The name constraints are returned as a byte array. This byte array
 contains the DER encoded form of the name constraints, as they
 would appear in the NameConstraints structure defined in RFC 5280
 and X.509. The ASN.1 notation for this structure is supplied in the
 documentation for
 `TrustAnchor(X509Certificate, byte[])
 TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints)`.
 

 Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- a byte array containing the ASN.1 DER encoding of a NameConstraints extension used for checking name constraints, or `null` if not set.
