---
id: "java-en-function-methodhandles-dropreturn"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.dropReturn"
signature: "public static MethodHandle dropReturn(MethodHandle target)"
title: "MethodHandles.dropReturn"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.dropReturn

```java
public static MethodHandle dropReturn(MethodHandle target)
```

Drop the return value of the target handle (if any).
 The returned method handle will have a `void` return type.

**参数**

- **target** — the method handle to adapt

**返回**

- a possibly adapted method handle

**异常**

- **NullPointerException** — if `target` is null

> *Since 16*
