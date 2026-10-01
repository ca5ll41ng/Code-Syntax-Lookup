---
id: "java-en-function-list-set"
language: "java"
lang: "en"
category: "function"
name: "List.set"
signature: "E set(int index, E element)"
title: "List.set"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.set

```java
E set(int index, E element)
```

Replaces the element at the specified position in this list with the
 specified element (optional operation).

**参数**

- **index** — index of the element to replace
- **element** — element to be stored at the specified position

**返回**

- the element previously at the specified position

**异常**

- **UnsupportedOperationException** — if the `set` operation is not supported by this list
- **ClassCastException** — if the class of the specified element prevents it from being added to this list
- **NullPointerException** — if the specified element is null and this list does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this list
- **IndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)
