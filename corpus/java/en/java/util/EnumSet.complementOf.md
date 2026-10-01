---
id: "java-en-function-enumset-complementof"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.complementOf"
signature: "public static <E extends Enum<E>> EnumSet<E> complementOf(EnumSet<E> s)"
title: "EnumSet.complementOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.complementOf

```java
public static <E extends Enum<E>> EnumSet<E> complementOf(EnumSet<E> s)
```

Creates an enum set with the same element type as the specified enum
 set, initially containing all the elements of this type that are
 not contained in the specified set.

**参数**

- **The** — class of the elements in the enum set
- **s** — the enum set from whose complement to initialize this enum set

**返回**

- The complement of the specified set in this set

**异常**

- **NullPointerException** — if `s` is null
