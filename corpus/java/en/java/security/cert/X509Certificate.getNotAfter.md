---
id: "java-en-function-x509certificate-getnotafter"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getNotAfter"
signature: "public abstract Date getNotAfter()"
title: "X509Certificate.getNotAfter"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getNotAfter

```java
public abstract Date getNotAfter()
```

Gets the `notAfter` date from the validity period of
 the certificate. See `getNotBefore() getNotBefore`
 for relevant ASN.1 definitions.

**返回**

- the end date of the validity period.

**参见**

- #checkValidity
