---
id: "java-en-function-x509certselector-addsubjectalternativename"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.addSubjectAlternativeName"
signature: "public void addSubjectAlternativeName(int type, String name) throws IOException"
title: "X509CertSelector.addSubjectAlternativeName"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.addSubjectAlternativeName

```java
public void addSubjectAlternativeName(int type, String name) throws IOException
```

Adds a name to the subjectAlternativeNames criterion. The
 `X509Certificate` must contain all or at least one
 of the specified subjectAlternativeNames, depending on the value of
 the matchAllNames flag (see `setMatchAllSubjectAltNames
 setMatchAllSubjectAltNames`).
 

 This method allows the caller to add a name to the set of subject
 alternative names.
 The specified name is added to any previous value for the
 subjectAlternativeNames criterion. If the specified name is a
 duplicate, it may be ignored.
 

 The name is provided in string format.
 RFC 822, DNS, and URI
 names use the well-established string formats for those types (subject to
 the restrictions included in RFC 5280). IPv4 address names are
 supplied using dotted quad notation. OID address names are represented
 as a series of nonnegative integers separated by periods. And
 directory names (distinguished names) are supplied in
 RFC 2253 format.
 No standard string format is defined for otherNames, X.400 names,
 EDI party names, IPv6 address names, or any other type of names. They
 should be specified using the
 `addSubjectAlternativeName(int type, byte [] name)
 addSubjectAlternativeName`
 method.
 

 **Note:** for distinguished names, use
 `addSubjectAlternativeName` instead.
 This method should not be relied on as it can fail to match some
 certificates because of a loss of encoding information in the RFC 2253
 String form of some distinguished names.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names
      RFC 822: STANDARD FOR THE FORMAT OF ARPA INTERNET TEXT MESSAGES

**参数**

- **type** — the name type (0-8, as specified in RFC 5280, section 4.2.1.6)
- **name** — the name in string form (not `null`)

**异常**

- **IOException** — if a parsing error occurs
