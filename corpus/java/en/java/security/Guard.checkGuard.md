---
id: "java-en-function-guard-checkguard"
language: "java"
lang: "en"
category: "function"
name: "Guard.checkGuard"
signature: "void checkGuard(Object object) throws SecurityException"
title: "Guard.checkGuard"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Guard.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Guard.checkGuard

```java
void checkGuard(Object object) throws SecurityException
```

Determines whether to allow access to the guarded object
 `object`. Returns silently if access is allowed.
 Otherwise, throws a `SecurityException`.

**参数**

- **object** — the object being protected by the guard.

**异常**

- **SecurityException** — if access is denied.
