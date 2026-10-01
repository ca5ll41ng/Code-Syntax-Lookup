---
id: "java-en-function-java-security-cert-x509extension"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509Extension"
title: "X509Extension"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Extension

Interface for an X.509 extension.

 

The extensions defined for X.509 v3
 `X509Certificate Certificates` and v2
 `X509CRL CRLs` (Certificate Revocation
 Lists) provide methods
 for associating additional attributes with users or public keys,
 for managing the certification hierarchy, and for managing CRL
 distribution. The X.509 extensions format also allows communities
 to define private extensions to carry information unique to those
 communities.

 

Each extension in a certificate/CRL may be designated as
 critical or non-critical.  A certificate/CRL-using system (an application
 validating a certificate/CRL) must reject the certificate/CRL if it
 encounters a critical extension it does not recognize.  A non-critical
 extension may be ignored if it is not recognized.
 

 The ASN.1 definition for this is:
 
```

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

 Since not all extensions are known, the `getExtensionValue`
 method returns the DER-encoded OCTET STRING of the
 extension value (i.e., the `extnValue`). This can then
 be handled by a Class that understands the extension.

> *Since 1.2*
