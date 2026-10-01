---
id: "java-en-function-set-contains"
language: "java"
lang: "en"
category: "function"
name: "Set.contains"
signature: "boolean contains(Object o)"
title: "Set.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.contains

```java
boolean contains(Object o)
```

Returns `true` if this set contains the specified element.
 More formally, returns `true` if and only if this set
 contains an element `e` such that
 `Objects.equals(o, e)`.

**参数**

- **o** — element whose presence in this set is to be tested

**返回**

- `true` if this set contains the specified element

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this set (optional)
- **NullPointerException** — if the specified element is null and this set does not permit null elements (optional)
