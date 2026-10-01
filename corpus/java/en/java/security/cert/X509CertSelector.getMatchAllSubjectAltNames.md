---
id: "java-en-function-x509certselector-getmatchallsubjectaltnames"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getMatchAllSubjectAltNames"
signature: "public boolean getMatchAllSubjectAltNames()"
title: "X509CertSelector.getMatchAllSubjectAltNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getMatchAllSubjectAltNames

```java
public boolean getMatchAllSubjectAltNames()
```

Indicates if the `X509Certificate` must contain all
 or at least one of the subjectAlternativeNames
 specified in the `setSubjectAlternativeNames
 setSubjectAlternativeNames` or `addSubjectAlternativeName
 addSubjectAlternativeName` methods. If `true`,
 the `X509Certificate` must contain all of the
 specified subject alternative names. If `false`, the
 `X509Certificate` must contain at least one of the
 specified subject alternative names.

**返回**

- `true` if the flag is enabled; `false` if the flag is disabled. The flag is `true` by default.

**参见**

- #setMatchAllSubjectAltNames
