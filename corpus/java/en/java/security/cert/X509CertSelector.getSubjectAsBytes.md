---
id: "java-en-function-x509certselector-getsubjectasbytes"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getSubjectAsBytes"
signature: "public byte[] getSubjectAsBytes() throws IOException"
title: "X509CertSelector.getSubjectAsBytes"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getSubjectAsBytes

```java
public byte[] getSubjectAsBytes() throws IOException
```

Returns the subject criterion as a byte array. This distinguished name
 must match the subject distinguished name in the
 `X509Certificate`. If `null`, the subject criterion
 is disabled and any subject distinguished name will do.
 

 If the value returned is not `null`, it is a byte
 array containing a single DER encoded distinguished name, as defined in
 X.501. The ASN.1 notation for this structure is supplied in the
 documentation for `setSubject`.
 

 Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- a byte array containing the required subject distinguished name in ASN.1 DER format (or `null`)

**异常**

- **IOException** — if an encoding error occurs
