---
id: "java-en-function-vector-elementat"
language: "java"
lang: "en"
category: "function"
name: "Vector.elementAt"
signature: "public synchronized E elementAt(int index)"
title: "Vector.elementAt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.elementAt

```java
public synchronized E elementAt(int index)
```

Returns the component at the specified index.

 

This method is identical in functionality to the `get`
 method (which is part of the `List` interface).

**参数**

- **index** — an index into this vector

**返回**

- the component at the specified index

**异常**

- **ArrayIndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)
