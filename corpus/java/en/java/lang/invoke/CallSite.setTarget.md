---
id: "java-en-function-callsite-settarget"
language: "java"
lang: "en"
category: "function"
name: "CallSite.setTarget"
signature: "public abstract void setTarget(MethodHandle newTarget)"
title: "CallSite.setTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/CallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallSite.setTarget

```java
public abstract void setTarget(MethodHandle newTarget)
```

Updates the target method of this call site, according to the
 behavior defined by this call site's specific class.
 The immediate subclasses of `CallSite` document the
 class-specific behaviors of this method.
 

 The type of the new target must be `equals equal to`
 the type of the old target.

**参数**

- **newTarget** — the new target

**异常**

- **NullPointerException** — if the proposed new target is null
- **WrongMethodTypeException** — if the proposed new target has a method type that differs from the previous target

**参见**

- CallSite#getTarget
- ConstantCallSite#setTarget
- MutableCallSite#setTarget
- VolatileCallSite#setTarget
