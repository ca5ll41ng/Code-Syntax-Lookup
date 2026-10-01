---
id: "java-en-function-mutablecallsite-settarget"
language: "java"
lang: "en"
category: "function"
name: "MutableCallSite.setTarget"
signature: "@Override public void setTarget(MethodHandle newTarget)"
title: "MutableCallSite.setTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MutableCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutableCallSite.setTarget

```java
@Override public void setTarget(MethodHandle newTarget)
```

Updates the target method of this call site, as a normal variable.
 The type of the new target must agree with the type of the old target.
 

 The interactions with memory are the same
 as of a write to an ordinary variable, such as an array element or a
 non-volatile, non-final field.
 

 In particular, unrelated threads may fail to see the updated target
 until they perform a read from memory.
 Stronger guarantees can be created by putting appropriate operations
 into the bootstrap method and/or the target methods used
 at any given call site.

**参数**

- **newTarget** — the new target

**异常**

- **NullPointerException** — if the proposed new target is null
- **WrongMethodTypeException** — if the proposed new target has a method type that differs from the previous target

**参见**

- #getTarget
