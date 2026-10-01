---
id: "java-en-function-enumset-range"
language: "java"
lang: "en"
category: "function"
name: "EnumSet.range"
signature: "public static <E extends Enum<E>> EnumSet<E> range(E from, E to)"
title: "EnumSet.range"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet.range

```java
public static <E extends Enum<E>> EnumSet<E> range(E from, E to)
```

Creates an enum set initially containing all of the elements in the
 range defined by the two specified endpoints.  The returned set will
 contain the endpoints themselves, which may be identical but must not
 be out of order.

**参数**

- **The** — class of the parameter elements and of the set
- **from** — the first element in the range
- **to** — the last element in the range

**返回**

- an enum set initially containing all of the elements in the range defined by the two specified endpoints

**异常**

- **NullPointerException** — if `from` or `to` are null
- **IllegalArgumentException** — if `from.compareTo(to) > 0`
