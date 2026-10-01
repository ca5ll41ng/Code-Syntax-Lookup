---
id: "java-en-function-list-indexof"
language: "java"
lang: "en"
category: "function"
name: "List.indexOf"
signature: "int indexOf(Object o)"
title: "List.indexOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.indexOf

```java
int indexOf(Object o)
```

Returns the index of the first occurrence of the specified element
 in this list, or -1 if this list does not contain the element.
 More formally, returns the lowest index `i` such that
 `Objects.equals(o, get(i))`,
 or -1 if there is no such index.

**参数**

- **o** — element to search for

**返回**

- the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this list (optional)
- **NullPointerException** — if the specified element is null and this list does not permit null elements (optional)
