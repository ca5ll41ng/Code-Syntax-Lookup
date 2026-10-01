---
id: "java-en-function-varhandle-withinvokebehavior"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.withInvokeBehavior"
signature: "public abstract VarHandle withInvokeBehavior()"
title: "VarHandle.withInvokeBehavior"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.withInvokeBehavior

```java
public abstract VarHandle withInvokeBehavior()
```

Returns a VarHandle, with access to the same variable(s) as this VarHandle, but whose
 invocation behavior of access mode methods is adjusted to
 invoke behavior.
 

 If this VarHandle already has invoke behavior this VarHandle is returned.
 

 Invoking `hasInvokeExactBehavior` on the returned var handle
 is guaranteed to return `false`.

**返回**

- a VarHandle with invoke behavior

**参见**

- #withInvokeExactBehavior()
- #hasInvokeExactBehavior()

> *Since 16*
