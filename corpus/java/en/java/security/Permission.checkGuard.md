---
id: "java-en-function-permission-checkguard"
language: "java"
lang: "en"
category: "function"
name: "Permission.checkGuard"
signature: "public void checkGuard(Object object) throws SecurityException"
title: "Permission.checkGuard"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.checkGuard

```java
public void checkGuard(Object object) throws SecurityException
```

Implements the guard interface for a permission.
 Returns silently if access is granted. Otherwise, throws
 a `SecurityException`.

       security manager was enabled and the requested access, specified
       by this permission, was not permitted.
       `SecurityManager The Security Manager` is no longer
       supported; thus, this method always throws a
       `SecurityException`.

**参数**

- **object** — the object being guarded (currently ignored).

**异常**

- **SecurityException** — always

**参见**

- Guard
- GuardedObject
