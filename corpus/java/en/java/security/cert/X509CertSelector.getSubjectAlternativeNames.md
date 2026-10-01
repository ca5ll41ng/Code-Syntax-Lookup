---
id: "java-en-function-x509certselector-getsubjectalternativenames"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getSubjectAlternativeNames"
signature: "public Collection<List<?>> getSubjectAlternativeNames()"
title: "X509CertSelector.getSubjectAlternativeNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getSubjectAlternativeNames

```java
public Collection<List<?>> getSubjectAlternativeNames()
```

Returns a copy of the subjectAlternativeNames criterion.
 The `X509Certificate` must contain all or at least one
 of the specified subjectAlternativeNames, depending on the value
 of the matchAllNames flag (see `getMatchAllSubjectAltNames
 getMatchAllSubjectAltNames`). If the value returned is
 `null`, no subjectAlternativeNames check will be performed.
 

 If the value returned is not `null`, it is a
 `Collection` with
 one entry for each name to be included in the subject alternative name
 criterion. Each entry is a `List` whose first entry is an
 `Integer` (the name type, 0-8) and whose second
 entry is a `String` or a byte array (the name, in
 string or ASN.1 DER encoded form, respectively).
 There can be multiple names of the same type.  Note that the
 `Collection` returned may contain duplicate names (same name
 and name type).
 

 Each subject alternative name in the `Collection`
 may be specified either as a `String` or as an ASN.1 encoded
 byte array. For more details about the formats used, see
 `addSubjectAlternativeName(int type, String name)
 addSubjectAlternativeName` and
 `addSubjectAlternativeName(int type, byte [] name)
 addSubjectAlternativeName`.
 

 Note that a deep copy is performed on the `Collection` to
 protect against subsequent modifications.

**返回**

- a `Collection` of names (or `null`)

**参见**

- #setSubjectAlternativeNames
