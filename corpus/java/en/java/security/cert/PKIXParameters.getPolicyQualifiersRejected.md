---
id: "java-en-function-pkixparameters-getpolicyqualifiersrejected"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getPolicyQualifiersRejected"
signature: "public boolean getPolicyQualifiersRejected()"
title: "PKIXParameters.getPolicyQualifiersRejected"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getPolicyQualifiersRejected

```java
public boolean getPolicyQualifiersRejected()
```

Gets the PolicyQualifiersRejected flag. If this flag is true,
 certificates that include policy qualifiers in a certificate policies
 extension that is marked critical are rejected.
 If the flag is false, certificates are not rejected on this basis.

 

 When a `PKIXParameters` object is created, this flag is
 set to true. This setting reflects the most common (and simplest)
 strategy for processing policy qualifiers. Applications that want to use
 a more sophisticated policy must set this flag to false.

**返回**

- the current value of the PolicyQualifiersRejected flag

**参见**

- #setPolicyQualifiersRejected
