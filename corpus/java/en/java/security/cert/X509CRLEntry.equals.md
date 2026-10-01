---
id: "java-en-function-x509crlentry-equals"
language: "java"
lang: "en"
category: "function"
name: "X509CRLEntry.equals"
signature: "public boolean equals(Object other)"
title: "X509CRLEntry.equals"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLEntry.equals

```java
public boolean equals(Object other)
```

Compares this CRL entry for equality with the given
 object. If the `other` object is an
 `instanceof` `X509CRLEntry`, then
 its encoded form (the inner SEQUENCE) is retrieved and compared
 with the encoded form of this CRL entry.

**参数**

- **other** — the object to test for equality with this CRL entry.

**返回**

- true iff the encoded forms of the two CRL entries match, false otherwise.
