---
id: "java-en-function-x509certificate-getissueruniqueid"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getIssuerUniqueID"
signature: "public abstract boolean[] getIssuerUniqueID()"
title: "X509Certificate.getIssuerUniqueID"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getIssuerUniqueID

```java
public abstract boolean[] getIssuerUniqueID()
```

Gets the `issuerUniqueID` value from the certificate.
 The issuer unique identifier is present in the certificate
 to handle the possibility of reuse of issuer names over time.
 RFC 5280 recommends that names not be reused and that
 conforming certificates not make use of unique identifiers.
 Applications conforming to that profile should be capable of
 parsing unique identifiers and making comparisons.

 

The ASN.1 definition for this is:
 
```

 issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL

 UniqueIdentifier  ::=  BIT STRING
 
```

**返回**

- the issuer unique identifier or null if it is not present in the certificate.
