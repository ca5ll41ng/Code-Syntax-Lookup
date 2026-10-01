---
id: "java-en-function-pkixparameters-setinitialpolicies"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setInitialPolicies"
signature: "public void setInitialPolicies(Set<String> initialPolicies)"
title: "PKIXParameters.setInitialPolicies"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setInitialPolicies

```java
public void setInitialPolicies(Set<String> initialPolicies)
```

Sets the `Set` of initial policy identifiers
 (OID strings), indicating that any one of these
 policies would be acceptable to the certificate user for the purposes of
 certification path processing. By default, any policy is acceptable
 (i.e. all policies), so a user that wants to allow any policy as
 acceptable does not need to call this method, or can call it
 with an empty `Set` (or `null`).
 

 Note that the `Set` is copied to protect against
 subsequent modifications.

**参数**

- **initialPolicies** — a `Set` of initial policy OIDs in `String` format (or `null`)

**异常**

- **ClassCastException** — if any of the elements in the set are not of type `String`

**参见**

- #getInitialPolicies
