---
id: "java-en-function-enumset-copyof"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.copyOf"
signature: "public static <E extends Enum<E>> EnumSet<E> copyOf(EnumSet<E> s)"
title: "EnumSet.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.copyOf

```java
public static <E extends Enum<E>> EnumSet<E> copyOf(EnumSet<E> s)
```

Creates an enum set with the same element type as the specified enum
 set, initially containing the same elements (if any).

**参数**

- **The** — class of the elements in the set
- **s** — the enum set from which to initialize this enum set

**返回**

- A copy of the specified enum set.

**异常**

- **NullPointerException** — if `s` is null
