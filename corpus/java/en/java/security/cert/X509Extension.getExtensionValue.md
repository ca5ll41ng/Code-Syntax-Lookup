---
id: "java-en-function-x509extension-getextensionvalue"
language: "java"
lang: "en"
category: "function"
name: "X509Extension.getExtensionValue"
signature: "byte[] getExtensionValue(String oid)"
title: "X509Extension.getExtensionValue"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Extension.getExtensionValue

```java
byte[] getExtensionValue(String oid)
```

Gets the DER-encoded OCTET string for the extension value
 (extnValue) identified by the passed-in `oid`
 String.
 The `oid` string is
 represented by a set of nonnegative whole numbers separated
 by periods.

 

For example:

 
 Examples of OIDs and extension names
 
 
 OID (Object Identifier)
 Extension Name
 
 
 1.3.6.1.5.5.7.1.1
 AuthorityInformationAccess
 2.5.29.14
 SubjectKeyIdentifier
 2.5.29.15
 KeyUsage
 2.5.29.17
 SubjectAlternativeName
 2.5.29.18
 IssuerAlternativeName
 2.5.29.19
 BasicConstraints
 2.5.29.30
 NameConstraints
 2.5.29.31
 CRLDistributionPoints
 2.5.29.32
 CertificatePolicies
 2.5.29.33
 PolicyMappings
 2.5.29.35
 AuthorityKeyIdentifier
 2.5.29.36
 PolicyConstraints
 2.5.29.37
 ExtendedKeyUsage

**参数**

- **oid** — the Object Identifier value for the extension.

**返回**

- the DER-encoded octet string of the extension value or null if it is not present.
