---
id: "java-en-function-identityscope-addidentity"
language: "java"
lang: "en"
category: "function"
name: "IdentityScope.addIdentity"
signature: "public abstract void addIdentity(Identity identity) throws KeyManagementException"
title: "IdentityScope.addIdentity"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/IdentityScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityScope.addIdentity

```java
public abstract void addIdentity(Identity identity) throws KeyManagementException
```

Adds an `Identity` to this identity scope.

**参数**

- **identity** — the `Identity` to be added.

**异常**

- **KeyManagementException** — if the identity is not valid, a name conflict occurs, another identity has the same public key as the identity being added, or another exception occurs.
