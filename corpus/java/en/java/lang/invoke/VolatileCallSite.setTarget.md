---
id: "java-en-function-volatilecallsite-settarget"
language: "java"
lang: "en"
category: "function"
name: "VolatileCallSite.setTarget"
signature: "@Override public void setTarget(MethodHandle newTarget)"
title: "VolatileCallSite.setTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VolatileCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VolatileCallSite.setTarget

```java
@Override public void setTarget(MethodHandle newTarget)
```

Updates the target method of this call site, as a volatile variable.
 The type of the new target must agree with the type of the old target.
 

 The interactions with memory are the same as of a write to a volatile field.
 In particular, any threads is guaranteed to see the updated target
 the next time it calls `getTarget`.

**参数**

- **newTarget** — the new target

**异常**

- **NullPointerException** — if the proposed new target is null
- **WrongMethodTypeException** — if the proposed new target has a method type that differs from the previous target

**参见**

- #getTarget
