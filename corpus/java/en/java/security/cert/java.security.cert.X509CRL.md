---
id: "java-en-function-java-security-cert-x509crl"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509CRL"
title: "X509CRL"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL

Abstract class for an X.509 Certificate Revocation List (CRL).
 A CRL is a time-stamped list identifying revoked certificates.
 It is signed by a Certificate Authority (CA) and made freely
 available in a public repository.

 

Each revoked certificate is
 identified in a CRL by its certificate serial number. When a
 certificate-using system uses a certificate (e.g., for verifying a
 remote user's digital signature), that system not only checks the
 certificate signature and validity but also acquires a suitably-
 recent CRL and checks that the certificate serial number is not on
 that CRL.  The meaning of "suitably-recent" may vary with local
 policy, but it usually means the most recently-issued CRL.  A CA
 issues a new CRL on a regular periodic basis (e.g., hourly, daily, or
 weekly).  Entries are added to CRLs as revocations occur, and an
 entry may be removed when the certificate expiration date is reached.
 

 The X.509 v2 CRL format is described below in ASN.1:
 
```

 CertificateList  ::=  SEQUENCE  {
     tbsCertList          TBSCertList,
     signatureAlgorithm   AlgorithmIdentifier,
     signature            BIT STRING  }
 
```

 

 More information can be found in
 RFC 5280: Internet X.509
 Public Key Infrastructure Certificate and CRL Profile.
 

 The ASN.1 definition of `tbsCertList` is:
 
```

 TBSCertList  ::=  SEQUENCE  {
     version                 Version OPTIONAL,
                             -- if present, must be v2
     signature               AlgorithmIdentifier,
     issuer                  Name,
     thisUpdate              ChoiceOfTime,
     nextUpdate              ChoiceOfTime OPTIONAL,
     revokedCertificates     SEQUENCE OF SEQUENCE  {
         userCertificate         CertificateSerialNumber,
         revocationDate          ChoiceOfTime,
         crlEntryExtensions      Extensions OPTIONAL
                                 -- if present, must be v2
         }  OPTIONAL,
     crlExtensions           [0]  EXPLICIT Extensions OPTIONAL
                                  -- if present, must be v2
     }
 
```

 

 CRLs are instantiated using a certificate factory. The following is an
 example of how to instantiate an X.509 CRL:
 
```
`try (InputStream inStream = new FileInputStream("fileName-of-crl")) {
     CertificateFactory cf = CertificateFactory.getInstance("X.509");
     X509CRL crl = (X509CRL)cf.generateCRL(inStream);
 `
 }
```

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- CRL
- CertificateFactory
- X509Extension

> *Since 1.2*
