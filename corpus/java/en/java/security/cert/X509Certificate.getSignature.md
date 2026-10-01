---
id: "java-en-function-x509certificate-getsignature"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSignature"
signature: "public abstract byte[] getSignature()"
title: "X509Certificate.getSignature"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSignature

```java
public abstract byte[] getSignature()
```

Gets the `signature` value (the raw signature bits) from
 the certificate.
 The ASN.1 definition for this is:
 
```

 signature     BIT STRING
 
```

**返回**

- the signature.
