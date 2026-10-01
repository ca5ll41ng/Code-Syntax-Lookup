---
id: "java-en-function-x509certselector-setmatchallsubjectaltnames"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setMatchAllSubjectAltNames"
signature: "public void setMatchAllSubjectAltNames(boolean matchAllNames)"
title: "X509CertSelector.setMatchAllSubjectAltNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setMatchAllSubjectAltNames

```java
public void setMatchAllSubjectAltNames(boolean matchAllNames)
```

Enables/disables matching all of the subjectAlternativeNames
 specified in the `setSubjectAlternativeNames
 setSubjectAlternativeNames` or `addSubjectAlternativeName
 addSubjectAlternativeName` methods. If enabled,
 the `X509Certificate` must contain all of the
 specified subject alternative names. If disabled, the
 `X509Certificate` must contain at least one of the
 specified subject alternative names.

 

The matchAllNames flag is `true` by default.

**参数**

- **matchAllNames** — if `true`, the flag is enabled; if `false`, the flag is disabled.

**参见**

- #getMatchAllSubjectAltNames
