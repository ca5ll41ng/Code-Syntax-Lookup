---
id: "java-en-function-collections-swap"
language: "java"
lang: "en"
category: "function"
name: "Collections.swap"
signature: "public static void swap(List<?> list, int i, int j)"
title: "Collections.swap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.swap

```java
public static void swap(List<?> list, int i, int j)
```

Swaps the elements at the specified positions in the specified list.
 (If the specified positions are equal, invoking this method leaves
 the list unchanged.)

**参数**

- **list** — The list in which to swap elements.
- **i** — the index of one element to be swapped.
- **j** — the index of the other element to be swapped.

**异常**

- **IndexOutOfBoundsException** — if either `i` or `j` is out of range (i &lt; 0 || i &gt;= list.size() || j &lt; 0 || j &gt;= list.size()).

> *Since 1.4*
