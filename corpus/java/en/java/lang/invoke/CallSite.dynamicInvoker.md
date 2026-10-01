---
id: "java-en-function-callsite-dynamicinvoker"
language: "java"
lang: "en"
category: "function"
name: "CallSite.dynamicInvoker"
signature: "public abstract MethodHandle dynamicInvoker()"
title: "CallSite.dynamicInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/CallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallSite.dynamicInvoker

```java
public abstract MethodHandle dynamicInvoker()
```

Produces a method handle equivalent to an invokedynamic instruction
 which has been linked to this call site.
 

 This method is equivalent to the following code:
 
```
`MethodHandle getTarget, invoker, result;
 getTarget = MethodHandles.publicLookup().bind(this, "getTarget", MethodType.methodType(MethodHandle.class));
 invoker = MethodHandles.exactInvoker(this.type());
 result = MethodHandles.foldArguments(invoker, getTarget)
 `
```

**返回**

- a method handle which always invokes this call site's current target
