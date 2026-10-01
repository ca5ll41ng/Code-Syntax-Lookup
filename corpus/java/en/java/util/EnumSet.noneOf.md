---
id: "java-en-function-enumset-noneof"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.noneOf"
signature: "public static <E extends Enum<E>> EnumSet<E> noneOf(Class<E> elementType)"
title: "EnumSet.noneOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.noneOf

```java
public static <E extends Enum<E>> EnumSet<E> noneOf(Class<E> elementType)
```

Creates an empty enum set with the specified element type.

**参数**

- **The** — class of the elements in the set
- **elementType** — the class object of the element type for this enum set

**返回**

- An empty enum set of the specified type.

**异常**

- **NullPointerException** — if `elementType` is null
