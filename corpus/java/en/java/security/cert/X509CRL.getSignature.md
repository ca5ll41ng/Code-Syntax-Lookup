---
id: "java-en-function-x509crl-getsignature"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getSignature"
signature: "public abstract byte[] getSignature()"
title: "X509CRL.getSignature"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getSignature

```java
public abstract byte[] getSignature()
```

Gets the `signature` value (the raw signature bits) from
 the CRL.
 The ASN.1 definition for this is:
 
```

 signature     BIT STRING
 
```

**返回**

- the signature.
