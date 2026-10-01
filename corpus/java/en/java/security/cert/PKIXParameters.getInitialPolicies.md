---
id: "java-en-function-pkixparameters-getinitialpolicies"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getInitialPolicies"
signature: "public Set<String> getInitialPolicies()"
title: "PKIXParameters.getInitialPolicies"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getInitialPolicies

```java
public Set<String> getInitialPolicies()
```

Returns an immutable `Set` of initial
 policy identifiers (OID strings), indicating that any one of these
 policies would be acceptable to the certificate user for the purposes of
 certification path processing. The default return value is an empty
 `Set`, which is interpreted as meaning that any policy would
 be acceptable.

**返回**

- an immutable `Set` of initial policy OIDs in `String` format, or an empty `Set` (implying any policy is acceptable). Never returns `null`.

**参见**

- #setInitialPolicies
