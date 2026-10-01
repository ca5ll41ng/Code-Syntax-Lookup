---
id: "java-en-function-x509certselector-setsubjectalternativenames"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSubjectAlternativeNames"
signature: "public void setSubjectAlternativeNames(Collection<List<?>> names) throws IOException"
title: "X509CertSelector.setSubjectAlternativeNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSubjectAlternativeNames

```java
public void setSubjectAlternativeNames(Collection<List<?>> names) throws IOException
```

Sets the subjectAlternativeNames criterion. The
 `X509Certificate` must contain all or at least one of the
 specified subjectAlternativeNames, depending on the value of
 the matchAllNames flag (see `setMatchAllSubjectAltNames
 setMatchAllSubjectAltNames`).
 

 This method allows the caller to specify, with a single method call,
 the complete set of subject alternative names for the
 subjectAlternativeNames criterion. The specified value replaces
 the previous value for the subjectAlternativeNames criterion.
 

 The `names` parameter (if not `null`) is a
 `Collection` with one
 entry for each name to be included in the subject alternative name
 criterion. Each entry is a `List` whose first entry is an
 `Integer` (the name type, 0-8) and whose second
 entry is a `String` or a byte array (the name, in
 string or ASN.1 DER encoded form, respectively).
 There can be multiple names of the same type. If `null`
 is supplied as the value for this argument, no
 subjectAlternativeNames check will be performed.
 

 Each subject alternative name in the `Collection`
 may be specified either as a `String` or as an ASN.1 encoded
 byte array. For more details about the formats used, see
 `addSubjectAlternativeName(int type, String name)
 addSubjectAlternativeName` and
 `addSubjectAlternativeName(int type, byte [] name)
 addSubjectAlternativeName`.
 

 **Note:** for distinguished names, specify the byte
 array form instead of the String form. See the note in
 `addSubjectAlternativeName` for more information.
 

 Note that the `names` parameter can contain duplicate
 names (same name and name type), but they may be removed from the
 `Collection` of names returned by the
 `getSubjectAlternativeNames getSubjectAlternativeNames` method.
 

 Note that a deep copy is performed on the `Collection` to
 protect against subsequent modifications.

**参数**

- **names** — a `Collection` of names (or `null`)

**异常**

- **IOException** — if a parsing error occurs

**参见**

- #getSubjectAlternativeNames
