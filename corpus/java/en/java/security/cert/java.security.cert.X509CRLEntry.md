---
id: "java-en-function-java-security-cert-x509crlentry"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509CRLEntry"
title: "X509CRLEntry"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLEntry

Abstract class for a revoked certificate in a CRL (Certificate
 Revocation List).

 The ASN.1 definition for revokedCertificates is:
 
```

 revokedCertificates    SEQUENCE OF SEQUENCE  {
     userCertificate    CertificateSerialNumber,
     revocationDate     ChoiceOfTime,
     crlEntryExtensions Extensions OPTIONAL
                        -- if present, must be v2
 }  OPTIONAL

 CertificateSerialNumber  ::=  INTEGER

 Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension

 Extension  ::=  SEQUENCE  {
     extnId        OBJECT IDENTIFIER,
     critical      BOOLEAN DEFAULT FALSE,
     extnValue     OCTET STRING
                   -- contains a DER encoding of a value
                   -- of the type registered for use with
                   -- the extnId object identifier value
 }
 
```

**参见**

- X509CRL
- X509Extension

> *Since 1.2*
