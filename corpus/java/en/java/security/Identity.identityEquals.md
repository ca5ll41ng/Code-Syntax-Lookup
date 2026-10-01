---
id: "java-en-function-identity-identityequals"
language: "java"
lang: "en"
category: "function"
name: "Identity.identityEquals"
signature: "protected boolean identityEquals(Identity identity)"
title: "Identity.identityEquals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity.identityEquals

```java
protected boolean identityEquals(Identity identity)
```

Tests for equality between the specified `Identity` and this
 `Identity`.
 This method should be overridden by subclasses to test for equality.
 The default behavior is to return `true` if the names and public
 keys are equal.

**参数**

- **identity** — the identity to test for equality with this `identity`.

**返回**

- `true` if the identities are considered equal, `false` otherwise.

**参见**

- #equals
