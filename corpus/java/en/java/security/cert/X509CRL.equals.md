---
id: "java-en-function-x509crl-equals"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.equals"
signature: "public boolean equals(Object other)"
title: "X509CRL.equals"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.equals

```java
public boolean equals(Object other)
```

Compares this CRL for equality with the given
 object. If the `other` object is an
 `instanceof` `X509CRL`, then
 its encoded form is retrieved and compared with the
 encoded form of this CRL.

**参数**

- **other** — the object to test for equality with this CRL.

**返回**

- true iff the encoded forms of the two CRLs match, false otherwise.
