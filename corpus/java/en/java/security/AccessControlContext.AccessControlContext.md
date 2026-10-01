---
id: "java-en-function-accesscontrolcontext-accesscontrolcontext"
language: "java"
lang: "en"
category: "function"
name: "AccessControlContext.AccessControlContext"
signature: "public AccessControlContext(ProtectionDomain[] context)"
title: "AccessControlContext.AccessControlContext"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessControlContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessControlContext.AccessControlContext

```java
public AccessControlContext(ProtectionDomain[] context)
```

Create an `AccessControlContext` with the given array of
 `ProtectionDomain` objects.
 Context must not be `null`. Duplicate domains will be removed
 from the context.

**参数**

- **context** — the `ProtectionDomain` objects associated with this context. The non-duplicate domains are copied from the array. Subsequent changes to the array will not affect this `AccessControlContext`.

**异常**

- **NullPointerException** — if `context` is `null`
