---
id: "java-en-function-accesscontrolcontext-equals"
language: "java"
lang: "en"
category: "function"
name: "AccessControlContext.equals"
signature: "public boolean equals(Object obj)"
title: "AccessControlContext.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessControlContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessControlContext.equals

```java
public boolean equals(Object obj)
```

Checks two `AccessControlContext` objects for equality.
 Checks that `obj` is
 an `AccessControlContext` and has the same set of
 `ProtectionDomain` objects as this context.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- `true` if `obj` is an `AccessControlContext`, and has the same set of `ProtectionDomain` objects as this context, `false` otherwise.
