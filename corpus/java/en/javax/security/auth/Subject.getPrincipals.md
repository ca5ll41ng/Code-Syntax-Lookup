---
id: "java-en-function-subject-getprincipals"
language: "java"
lang: "en"
category: "function"
name: "Subject.getPrincipals"
signature: "public Set<Principal> getPrincipals()"
title: "Subject.getPrincipals"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.getPrincipals

```java
public Set<Principal> getPrincipals()
```

Return the `Set` of Principals associated with this
 `Subject`.  Each `Principal` represents
 an identity for this `Subject`.

 

 The returned `Set` is backed by this Subject's
 internal `Principal` `Set`.  Any modification
 to the returned `Set` affects the internal
 `Principal` `Set` as well.

**返回**

- the `Set` of Principals associated with this `Subject`.
