---
id: "java-en-function-x509certselector-getsubjectpublickeyalgid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getSubjectPublicKeyAlgID"
signature: "public String getSubjectPublicKeyAlgID()"
title: "X509CertSelector.getSubjectPublicKeyAlgID"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getSubjectPublicKeyAlgID

```java
public String getSubjectPublicKeyAlgID()
```

Returns the subjectPublicKeyAlgID criterion. The
 `X509Certificate` must contain a subject public key
 with the specified algorithm. If `null`, no
 subjectPublicKeyAlgID check will be done.

**返回**

- the object identifier (OID) of the signature algorithm to check for (or `null`). An OID is represented by a set of nonnegative integers separated by periods.

**参见**

- #setSubjectPublicKeyAlgID
