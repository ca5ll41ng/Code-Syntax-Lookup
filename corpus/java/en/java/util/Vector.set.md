---
id: "java-en-function-vector-set"
language: "java"
lang: "en"
category: "function"
name: "Vector.set"
signature: "public synchronized E set(int index, E element)"
title: "Vector.set"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.set

```java
public synchronized E set(int index, E element)
```

Replaces the element at the specified position in this Vector with the
 specified element.

**参数**

- **index** — index of the element to replace
- **element** — element to be stored at the specified position

**返回**

- the element previously at the specified position

**异常**

- **ArrayIndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)

> *Since 1.2*
