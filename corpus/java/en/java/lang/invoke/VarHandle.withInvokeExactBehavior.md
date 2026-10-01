---
id: "java-en-function-varhandle-withinvokeexactbehavior"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.withInvokeExactBehavior"
signature: "public abstract VarHandle withInvokeExactBehavior()"
title: "VarHandle.withInvokeExactBehavior"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.withInvokeExactBehavior

```java
public abstract VarHandle withInvokeExactBehavior()
```

Returns a VarHandle, with access to the same variable(s) as this VarHandle, but whose
 invocation behavior of access mode methods is adjusted to
 invoke-exact behavior.
 

 If this VarHandle already has invoke-exact behavior this VarHandle is returned.
 

 Invoking `hasInvokeExactBehavior` on the returned var handle
 is guaranteed to return `true`.

 Invoke-exact behavior guarantees that upon invocation of an access mode method
 the types and arity of the arguments must match the `accessModeType(AccessMode) access mode type`,
 otherwise a `WrongMethodTypeException` is thrown.

**返回**

- a VarHandle with invoke-exact behavior

**参见**

- #withInvokeBehavior()
- #hasInvokeExactBehavior()

> *Since 16*
