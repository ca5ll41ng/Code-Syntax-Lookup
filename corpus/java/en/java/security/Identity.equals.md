---
id: "java-en-function-identity-equals"
language: "java"
lang: "en"
category: "function"
name: "Identity.equals"
signature: "public final boolean equals(Object identity)"
title: "Identity.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity.equals

```java
public final boolean equals(Object identity)
```

Tests for equality between the specified object and this
 `Identity`.
 This first tests to see if the entities actually refer to the same
 object, in which case it returns `true`. Next, it checks to see if
 the entities have the same name and the same scope. If they do,
 the method returns `true`. Otherwise, it calls
 `identityEquals(Identity) identityEquals`, which subclasses should
 override.

**参数**

- **identity** — the object to test for equality with this `Identity`.

**返回**

- `true` if the objects are considered equal, `false` otherwise.

**参见**

- #identityEquals
