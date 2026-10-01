---
id: "java-en-function-x509certificate-getbasicconstraints"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getBasicConstraints"
signature: "public abstract int getBasicConstraints()"
title: "X509Certificate.getBasicConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getBasicConstraints

```java
public abstract int getBasicConstraints()
```

Gets the certificate constraints path length from the
 critical `BasicConstraints` extension, (OID = 2.5.29.19).
 

 The basic constraints extension identifies whether the subject
 of the certificate is a Certificate Authority (CA) and
 how deep a certification path may exist through that CA. The
 `pathLenConstraint` field (see below) is meaningful
 only if `cA` is set to TRUE. In this case, it gives the
 maximum number of CA certificates that may follow this certificate in a
 certification path. A value of zero indicates that only an end-entity
 certificate may follow in the path.
 

 The ASN.1 definition for this is:
 
```

 BasicConstraints ::= SEQUENCE {
     cA                  BOOLEAN DEFAULT FALSE,
     pathLenConstraint   INTEGER (0..MAX) OPTIONAL }
 
```

**返回**

- the value of `pathLenConstraint` if the BasicConstraints extension is present in the certificate and the subject of the certificate is a CA, otherwise -1. If the subject of the certificate is a CA and `pathLenConstraint` does not appear, `Integer.MAX_VALUE` is returned to indicate that there is no limit to the allowed length of the certification path.
