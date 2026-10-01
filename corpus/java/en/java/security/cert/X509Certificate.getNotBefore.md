---
id: "java-en-function-x509certificate-getnotbefore"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getNotBefore"
signature: "public abstract Date getNotBefore()"
title: "X509Certificate.getNotBefore"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getNotBefore

```java
public abstract Date getNotBefore()
```

Gets the `notBefore` date from the validity period of
 the certificate.
 The relevant ASN.1 definitions are:
 
```

 validity             Validity

 Validity ::= SEQUENCE {
     notBefore      CertificateValidityDate,
     notAfter       CertificateValidityDate }

 CertificateValidityDate ::= CHOICE {
     utcTime        UTCTime,
     generalTime    GeneralizedTime }
 
```

**返回**

- the start date of the validity period.

**参见**

- #checkValidity
