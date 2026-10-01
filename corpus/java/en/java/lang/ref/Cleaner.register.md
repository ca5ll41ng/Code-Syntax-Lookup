---
id: "java-en-function-cleaner-register"
language: "java"
lang: "en"
category: "function"
name: "Cleaner.register"
signature: "public Cleanable register(@jdk.internal.RequiresIdentity Object obj, Runnable action)"
title: "Cleaner.register"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Cleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cleaner.register

```java
public Cleanable register(@jdk.internal.RequiresIdentity Object obj, Runnable action)
```

Registers an object and a cleaning action to run when the object
 becomes phantom reachable.
 Refer to the API Note above for
 cautions about the behavior of cleaning actions.

 

The given object is kept strongly reachable (and therefore not eligible
 for cleaning) during the register() method.

 

`#MemoryConsistency Memory consistency effects`:
 Actions in a thread prior to calling `Cleaner.register()`
 happen-before
 the cleaning action is run by the Cleaner's thread.

**参数**

- **obj** — the object to monitor
- **action** — a `Runnable` to invoke when the object becomes phantom reachable

**返回**

- a `Cleanable` instance

**异常**

- **IdentityException** — if the object is not an `hasIdentity(Object) identity object`
