---
id: "java-en-function-x509certselector-setauthoritykeyidentifier"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setAuthorityKeyIdentifier"
signature: "public void setAuthorityKeyIdentifier(byte[] authorityKeyID)"
title: "X509CertSelector.setAuthorityKeyIdentifier"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setAuthorityKeyIdentifier

```java
public void setAuthorityKeyIdentifier(byte[] authorityKeyID)
```

Sets the authorityKeyIdentifier criterion. The
 `X509Certificate` must contain an
 AuthorityKeyIdentifier extension for which the contents of the
 extension value matches the specified criterion value.
 If the criterion value is `null`, no
 authorityKeyIdentifier check will be done.
 

 If `authorityKeyID` is not `null`, it
 should contain a single DER encoded value corresponding to the contents
 of the extension value (not including the object identifier,
 criticality setting, and encapsulating OCTET STRING)
 for an AuthorityKeyIdentifier extension.
 The ASN.1 notation for this structure follows.

 
```
`AuthorityKeyIdentifier ::= SEQUENCE {
    keyIdentifier             [0] KeyIdentifier           OPTIONAL,
    authorityCertIssuer       [1] GeneralNames            OPTIONAL,
    authorityCertSerialNumber [2] CertificateSerialNumber OPTIONAL  `

 KeyIdentifier ::= OCTET STRING
 }
```

 

 Authority key identifiers are not parsed by the
 `X509CertSelector`.  Instead, the values are
 compared using a byte-by-byte comparison.
 

 When the `keyIdentifier` field of
 `AuthorityKeyIdentifier` is populated, the value is
 usually taken from the `SubjectKeyIdentifier` extension
 in the issuer's certificate.  Note, however, that the result of
 `X509Certificate.getExtensionValue()` on the issuer's certificate may NOT be used
 directly as the input to `setAuthorityKeyIdentifier`.
 This is because the SubjectKeyIdentifier contains
 only a KeyIdentifier OCTET STRING, and not a SEQUENCE of
 KeyIdentifier, GeneralNames, and CertificateSerialNumber.
 In order to use the extension value of the issuer certificate's
 `SubjectKeyIdentifier`
 extension, it will be necessary to extract the value of the embedded
 `KeyIdentifier` OCTET STRING, then DER encode this OCTET
 STRING inside a SEQUENCE.
 For more details on SubjectKeyIdentifier, see
 `setSubjectKeyIdentifier`.
 

 Note also that the byte array supplied here is cloned to protect against
 subsequent modifications.

**参数**

- **authorityKeyID** — the authority key identifier (or `null`)

**参见**

- #getAuthorityKeyIdentifier
