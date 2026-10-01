---
id: "java-en-function-enumset-of"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.of"
signature: "public static <E extends Enum<E>> EnumSet<E> of(E e)"
title: "EnumSet.of"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.of

```java
public static <E extends Enum<E>> EnumSet<E> of(E e)
```

Creates an enum set initially containing the specified element.

 Overloadings of this method exist to initialize an enum set with
 one through five elements.  A sixth overloading is provided that
 uses the varargs feature.  This overloading may be used to create
 an enum set initially containing an arbitrary number of elements, but
 is likely to run slower than the overloadings that do not use varargs.

**参数**

- **The** — class of the specified element and of the set
- **e** — the element that this set is to contain initially

**返回**

- an enum set initially containing the specified element

**异常**

- **NullPointerException** — if `e` is null
