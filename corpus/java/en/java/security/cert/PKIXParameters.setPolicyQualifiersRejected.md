---
id: "java-en-function-pkixparameters-setpolicyqualifiersrejected"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setPolicyQualifiersRejected"
signature: "public void setPolicyQualifiersRejected(boolean qualifiersRejected)"
title: "PKIXParameters.setPolicyQualifiersRejected"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setPolicyQualifiersRejected

```java
public void setPolicyQualifiersRejected(boolean qualifiersRejected)
```

Sets the PolicyQualifiersRejected flag. If this flag is true,
 certificates that include policy qualifiers in a certificate
 policies extension that is marked critical are rejected.
 If the flag is false, certificates are not rejected on this basis.

 

 When a `PKIXParameters` object is created, this flag is
 set to true. This setting reflects the most common (and simplest)
 strategy for processing policy qualifiers. Applications that want to use
 a more sophisticated policy must set this flag to false.
 

 Note that the PKIX certification path validation algorithm specifies
 that any policy qualifier in a certificate policies extension that is
 marked critical must be processed and validated. Otherwise the
 certification path must be rejected. If the policyQualifiersRejected flag
 is set to false, it is up to the application to validate all policy
 qualifiers in this manner in order to be PKIX compliant.

**参数**

- **qualifiersRejected** — the new value of the PolicyQualifiersRejected flag

**参见**

- #getPolicyQualifiersRejected
- PolicyQualifierInfo
