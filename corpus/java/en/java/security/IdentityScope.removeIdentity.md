---
id: "java-en-function-identityscope-removeidentity"
language: "java"
lang: "en"
category: "function"
name: "IdentityScope.removeIdentity"
signature: "public abstract void removeIdentity(Identity identity) throws KeyManagementException"
title: "IdentityScope.removeIdentity"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/IdentityScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityScope.removeIdentity

```java
public abstract void removeIdentity(Identity identity) throws KeyManagementException
```

Removes an `Identity` from this identity scope.

**参数**

- **identity** — the `Identity` to be removed.

**异常**

- **KeyManagementException** — if the identity is missing, or another exception occurs.
