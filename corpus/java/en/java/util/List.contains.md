---
id: "java-en-function-list-contains"
language: "java"
lang: "en"
category: "function"
name: "List.contains"
signature: "boolean contains(Object o)"
title: "List.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.contains

```java
boolean contains(Object o)
```

Returns `true` if this list contains the specified element.
 More formally, returns `true` if and only if this list contains
 at least one element `e` such that
 `Objects.equals(o, e)`.

**参数**

- **o** — element whose presence in this list is to be tested

**返回**

- `true` if this list contains the specified element

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this list (optional)
- **NullPointerException** — if the specified element is null and this list does not permit null elements (optional)
