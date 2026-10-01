---
id: "java-en-function-vector-elements"
language: "java"
lang: "en"
category: "function"
name: "Vector.elements"
signature: "public Enumeration<E> elements()"
title: "Vector.elements"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.elements

```java
public Enumeration<E> elements()
```

Returns an enumeration of the components of this vector. The
 returned `Enumeration` object will generate all items in
 this vector. The first item generated is the item at index `0`,
 then the item at index `1`, and so on. If the vector is
 structurally modified while enumerating over the elements then the
 results of enumerating are undefined.

**返回**

- an enumeration of the components of this vector

**参见**

- Iterator
