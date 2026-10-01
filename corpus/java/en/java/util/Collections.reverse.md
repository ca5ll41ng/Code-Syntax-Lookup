---
id: "java-en-function-collections-reverse"
language: "java"
lang: "en"
category: "function"
name: "Collections.reverse"
signature: "public static void reverse(List<?> list)"
title: "Collections.reverse"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.reverse

```java
public static void reverse(List<?> list)
```

Reverses the order of the elements in the specified list.

 This method runs in linear time.

 This method mutates the specified list in-place. To obtain a
 reverse-ordered view of a list without mutating it, use the
 `reversed List.reversed` method.

**参数**

- **list** — the list whose elements are to be reversed.

**异常**

- **UnsupportedOperationException** — if the specified list or its list-iterator does not support the `set` operation.

**参见**

- List#reversed List.reversed
