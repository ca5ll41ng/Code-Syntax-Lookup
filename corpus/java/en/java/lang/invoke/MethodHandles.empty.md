---
id: "java-en-function-methodhandles-empty"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.empty"
signature: "public static MethodHandle empty(MethodType type)"
title: "MethodHandles.empty"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.empty

```java
public static MethodHandle empty(MethodType type)
```

Produces a method handle of the requested type which ignores any arguments, does nothing,
 and returns a suitable default depending on the return type.
 That is, it returns a zero primitive value, a `null`, or `void`.
 

The returned method handle is equivalent to
 `dropArguments(zero(type.returnType()), 0, type.parameterList())`.

 `guardWithTest(pred, target, empty(target.type())`.

**参数**

- **type** — the type of the desired method handle

**返回**

- a constant method handle of the given type, which returns a default value of the given return type

**异常**

- **NullPointerException** — if the argument is null

**参见**

- MethodHandles#zero(Class)
- MethodHandles#constant

> *Since 9*
