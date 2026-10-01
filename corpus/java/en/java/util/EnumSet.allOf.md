---
id: "java-en-function-enumset-allof"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.allOf"
signature: "public static <E extends Enum<E>> EnumSet<E> allOf(Class<E> elementType)"
title: "EnumSet.allOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.allOf

```java
public static <E extends Enum<E>> EnumSet<E> allOf(Class<E> elementType)
```

Creates an enum set containing all of the elements in the specified
 element type.

**参数**

- **The** — class of the elements in the set
- **elementType** — the class object of the element type for this enum set

**返回**

- An enum set containing all the elements in the specified type.

**异常**

- **NullPointerException** — if `elementType` is null
