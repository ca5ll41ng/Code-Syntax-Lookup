---
id: "java-en-function-x509certselector-getissuerasbytes"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getIssuerAsBytes"
signature: "public byte[] getIssuerAsBytes() throws IOException"
title: "X509CertSelector.getIssuerAsBytes"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getIssuerAsBytes

```java
public byte[] getIssuerAsBytes() throws IOException
```

Returns the issuer criterion as a byte array. This distinguished name
 must match the issuer distinguished name in the
 `X509Certificate`. If `null`, the issuer criterion
 is disabled and any issuer distinguished name will do.
 

 If the value returned is not `null`, it is a byte
 array containing a single DER encoded distinguished name, as defined in
 X.501. The ASN.1 notation for this structure is supplied in the
 documentation for `setIssuer`.
 

 Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- a byte array containing the required issuer distinguished name in ASN.1 DER format (or `null`)

**异常**

- **IOException** — if an encoding error occurs
