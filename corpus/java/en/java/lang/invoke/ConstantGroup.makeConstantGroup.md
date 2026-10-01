---
id: "java-en-function-constantgroup-makeconstantgroup"
language: "java"
lang: "en"
category: "function"
name: "ConstantGroup.makeConstantGroup"
signature: "static ConstantGroup makeConstantGroup(List<Object> constants, Object ifNotPresent, IntFunction<Object> constantProvider)"
title: "ConstantGroup.makeConstantGroup"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantGroup.makeConstantGroup

```java
static ConstantGroup makeConstantGroup(List<Object> constants, Object ifNotPresent, IntFunction<Object> constantProvider)
```

Make a new constant group with the given constants.
 The value of `ifNotPresent` may be any reference.
 If this value is encountered as an element of the
 `constants` list, the new constant group will
 regard that element of the list as logically missing.
 If the new constant group is called upon to resolve
 a missing element of the group, it will refer to the
 given `constantProvider`, by calling it on the
 index of the missing element.
 The `constantProvider` must be stable, in the sense
 that the outcome of calling it on the same index twice
 will produce equivalent results.
 If `constantProvider` is the null reference, then
 it will be treated as if it were a function which raises
 `NoSuchElementException`.

**参数**

- **constants** — the elements of this constant group
- **ifNotPresent** — sentinel value provided instead of a missing constant
- **constantProvider** — function to call when a missing constant is resolved

**返回**

- a new constant group with the given constants and resolution behavior
