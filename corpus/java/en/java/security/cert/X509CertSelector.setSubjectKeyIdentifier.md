---
id: "java-en-function-x509certselector-setsubjectkeyidentifier"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSubjectKeyIdentifier"
signature: "public void setSubjectKeyIdentifier(byte[] subjectKeyID)"
title: "X509CertSelector.setSubjectKeyIdentifier"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSubjectKeyIdentifier

```java
public void setSubjectKeyIdentifier(byte[] subjectKeyID)
```

Sets the subjectKeyIdentifier criterion. The
 `X509Certificate` must contain a SubjectKeyIdentifier
 extension for which the contents of the extension
 matches the specified criterion value.
 If the criterion value is `null`, no
 subjectKeyIdentifier check will be done.
 

 If `subjectKeyID` is not `null`, it
 should contain a single DER encoded value corresponding to the contents
 of the extension value (not including the object identifier,
 criticality setting, and encapsulating OCTET STRING)
 for a SubjectKeyIdentifier extension.
 The ASN.1 notation for this structure follows.

 
```
`SubjectKeyIdentifier ::= KeyIdentifier

 KeyIdentifier ::= OCTET STRING
 `
```

 

 Since the format of subject key identifiers is not mandated by
 any standard, subject key identifiers are not parsed by the
 `X509CertSelector`. Instead, the values are compared using
 a byte-by-byte comparison.
 

 Note that the byte array supplied here is cloned to protect against
 subsequent modifications.

**参数**

- **subjectKeyID** — the subject key identifier (or `null`)

**参见**

- #getSubjectKeyIdentifier
