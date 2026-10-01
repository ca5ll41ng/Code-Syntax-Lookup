---
id: "java-en-function-vector-get"
language: "java"
lang: "en"
category: "function"
name: "Vector.get"
signature: "public synchronized E get(int index)"
title: "Vector.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.get

```java
public synchronized E get(int index)
```

Returns the element at the specified position in this Vector.

**参数**

- **index** — index of the element to return

**返回**

- object at the specified index

**异常**

- **ArrayIndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)

> *Since 1.2*
