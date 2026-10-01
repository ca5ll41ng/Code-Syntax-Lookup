---
id: "java-en-function-switchpoint-guardwithtest"
language: "java"
lang: "en"
category: "function"
name: "SwitchPoint.guardWithTest"
signature: "public MethodHandle guardWithTest(MethodHandle target, MethodHandle fallback)"
title: "SwitchPoint.guardWithTest"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SwitchPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchPoint.guardWithTest

```java
public MethodHandle guardWithTest(MethodHandle target, MethodHandle fallback)
```

Returns a method handle which always delegates either to the target or the fallback.
 The method handle will delegate to the target exactly as long as the switch point is valid.
 After that, it will permanently delegate to the fallback.
 

 The target and fallback must be of exactly the same method type,
 and the resulting combined method handle will also be of this type.

**参数**

- **target** — the method handle selected by the switch point as long as it is valid
- **fallback** — the method handle selected by the switch point after it is invalidated

**返回**

- a combined method handle which always calls either the target or fallback

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if the two method types do not match

**参见**

- MethodHandles#guardWithTest
