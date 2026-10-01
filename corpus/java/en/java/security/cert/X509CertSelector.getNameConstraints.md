---
id: "java-en-function-x509certselector-getnameconstraints"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getNameConstraints"
signature: "public byte[] getNameConstraints()"
title: "X509CertSelector.getNameConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getNameConstraints

```java
public byte[] getNameConstraints()
```

Returns the name constraints criterion. The `X509Certificate`
 must have subject and subject alternative names that
 meet the specified name constraints.
 

 The name constraints are returned as a byte array. This byte array
 contains the DER encoded form of the name constraints, as they
 would appear in the NameConstraints structure defined in RFC 5280
 and X.509. The ASN.1 notation for this structure is supplied in the
 documentation for
 `setNameConstraints`.
 

 Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- a byte array containing the ASN.1 DER encoding of a NameConstraints extension used for checking name constraints. `null` if no name constraints check will be performed.

**参见**

- #setNameConstraints
