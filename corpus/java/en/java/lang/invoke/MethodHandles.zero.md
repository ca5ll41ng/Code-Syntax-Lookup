---
id: "java-en-function-methodhandles-zero"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.zero"
signature: "public static MethodHandle zero(Class<?> type)"
title: "MethodHandles.zero"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.zero

```java
public static MethodHandle zero(Class<?> type)
```

Produces a constant method handle of the requested return type which
 returns the default value for that type every time it is invoked.
 The resulting constant method handle will have no side effects.
 

The returned method handle is equivalent to `empty(methodType(type))`.
 It is also equivalent to `explicitCastArguments(constant(Object.class, null), methodType(type))`,
 since `explicitCastArguments` converts `null` to default values.

**参数**

- **type** — the expected return type of the desired method handle

**返回**

- a constant method handle that takes no arguments and returns the default value of the given type (or void, if the type is void)

**异常**

- **NullPointerException** — if the argument is null

**参见**

- MethodHandles#constant
- MethodHandles#empty
- MethodHandles#explicitCastArguments

> *Since 9*
