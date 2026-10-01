---
id: "java-en-function-x509certificate-getsigalgoid"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSigAlgOID"
signature: "public abstract String getSigAlgOID()"
title: "X509Certificate.getSigAlgOID"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSigAlgOID

```java
public abstract String getSigAlgOID()
```

Gets the signature algorithm OID string from the certificate.
 An OID is represented by a set of nonnegative whole numbers separated
 by periods.
 For example, the string "1.2.840.10040.4.3" identifies the SHA-1
 with DSA signature algorithm defined in
 RFC 3279: Algorithms and
 Identifiers for the Internet X.509 Public Key Infrastructure Certificate
 and CRL Profile.

 

See `getSigAlgName() getSigAlgName` for
 relevant ASN.1 definitions.

      RFC 3279: Algorithms and Identifiers for the Internet X.509
              Public Key Infrastructure Certificate and Certificate
              Revocation List (CRL) Profile

**返回**

- the signature algorithm OID string.
