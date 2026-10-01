---
id: "java-en-function-x509certificate-getsubjectdn"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSubjectDN"
signature: "public abstract Principal getSubjectDN()"
title: "X509Certificate.getSubjectDN"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSubjectDN

```java
public abstract Principal getSubjectDN()
```

Gets the `subject` (subject distinguished name) value
 from the certificate.  If the `subject` value is empty,
 then the `getName()` method of the returned
 `Principal` object returns an empty string ("").

 

 The ASN.1 definition for this is:
 
```

 subject    Name
 
```

 

See `getIssuerDN() getIssuerDN` for `Name`
 and other relevant definitions.

**返回**

- a Principal whose name is the subject name.

> **⚠ Deprecated** — Use `getSubjectX500Principal` instead. This method returns the `subject` as an implementation specific `Principal` object, which should not be relied upon by portable code.
