---
id: "java-en-function-objects-checkindex"
language: "java"
lang: "en"
category: "function"
name: "Objects.checkIndex"
signature: "public static int checkIndex(int index, int length)"
title: "Objects.checkIndex"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.checkIndex

```java
public static int checkIndex(int index, int length)
```

Checks if the `index` is within the bounds of the range from
 `0` (inclusive) to `length` (exclusive).

 

The `index` is defined to be out of bounds if any of the
 following inequalities is true:
 
  
- `index < 0`
  
- `index >= length`
  
- `length < 0`, which is implied from the former inequalities

**参数**

- **index** — the index
- **length** — the upper-bound (exclusive) of the range

**返回**

- `index` if it is within bounds of the range

**异常**

- **IndexOutOfBoundsException** — if the `index` is out of bounds

> *Since 9*
