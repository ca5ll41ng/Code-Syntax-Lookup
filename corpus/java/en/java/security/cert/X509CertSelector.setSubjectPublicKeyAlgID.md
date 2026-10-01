---
id: "java-en-function-x509certselector-setsubjectpublickeyalgid"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSubjectPublicKeyAlgID"
signature: "public void setSubjectPublicKeyAlgID(String oid) throws IOException"
title: "X509CertSelector.setSubjectPublicKeyAlgID"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSubjectPublicKeyAlgID

```java
public void setSubjectPublicKeyAlgID(String oid) throws IOException
```

Sets the subjectPublicKeyAlgID criterion. The
 `X509Certificate` must contain a subject public key
 with the specified algorithm. If `null`, no
 subjectPublicKeyAlgID check will be done.

**参数**

- **oid** — The object identifier (OID) of the algorithm to check for (or `null`). An OID is represented by a set of nonnegative integers separated by periods.

**异常**

- **IOException** — if the OID is invalid, such as the first component being not 0, 1 or 2 or the second component being greater than 39.

**参见**

- #getSubjectPublicKeyAlgID
