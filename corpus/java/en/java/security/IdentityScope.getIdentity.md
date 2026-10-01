---
id: "java-en-function-identityscope-getidentity"
language: "java"
lang: "en"
category: "function"
name: "IdentityScope.getIdentity"
signature: "public abstract Identity getIdentity(String name)"
title: "IdentityScope.getIdentity"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/IdentityScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityScope.getIdentity

```java
public abstract Identity getIdentity(String name)
```

Returns the `Identity` in this scope with the specified
 name (if any).

**参数**

- **name** — the name of the `Identity` to be retrieved.

**返回**

- the `Identity` named `name`, or `null` if there are no identities named `name` in this scope.
