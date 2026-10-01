---
id: "java-en-function-callsite-gettarget"
language: "java"
lang: "en"
category: "function"
name: "CallSite.getTarget"
signature: "public abstract MethodHandle getTarget()"
title: "CallSite.getTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/CallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallSite.getTarget

```java
public abstract MethodHandle getTarget()
```

Returns the target method of the call site, according to the
 behavior defined by this call site's specific class.
 The immediate subclasses of `CallSite` document the
 class-specific behaviors of this method.

**返回**

- the current linkage state of the call site, its target method handle

**参见**

- ConstantCallSite
- VolatileCallSite
- #setTarget
- ConstantCallSite#getTarget
- MutableCallSite#getTarget
- VolatileCallSite#getTarget
