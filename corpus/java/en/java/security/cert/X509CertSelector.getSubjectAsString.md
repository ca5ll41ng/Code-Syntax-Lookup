---
id: "java-en-function-x509certselector-getsubjectasstring"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getSubjectAsString"
signature: "public String getSubjectAsString()"
title: "X509CertSelector.getSubjectAsString"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getSubjectAsString

```java
public String getSubjectAsString()
```

Returns the subject criterion as a `String`. This
 distinguished name must match the subject distinguished name in the
 `X509Certificate`. If `null`, the subject criterion
 is disabled and any subject distinguished name will do.
 

 If the value returned is not `null`, it is a
 distinguished name, in
 RFC 2253 format.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names

**返回**

- the required subject distinguished name in RFC 2253 format (or `null`)

> **⚠ Deprecated** — Use `getSubject` or `getSubjectAsBytes` instead. This method should not be relied on as it can fail to match some certificates because of a loss of encoding information in the RFC 2253 String form of some distinguished names.
