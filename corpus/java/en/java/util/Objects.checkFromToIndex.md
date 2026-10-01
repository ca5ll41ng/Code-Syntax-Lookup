---
id: "java-en-function-objects-checkfromtoindex"
language: "java"
lang: "en"
category: "function"
name: "Objects.checkFromToIndex"
signature: "public static int checkFromToIndex(int fromIndex, int toIndex, int length)"
title: "Objects.checkFromToIndex"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.checkFromToIndex

```java
public static int checkFromToIndex(int fromIndex, int toIndex, int length)
```

Checks if the sub-range from `fromIndex` (inclusive) to
 `toIndex` (exclusive) is within the bounds of range from `0`
 (inclusive) to `length` (exclusive).

 

The sub-range is defined to be out of bounds if any of the following
 inequalities is true:
 
  
- `fromIndex < 0`
  
- `fromIndex > toIndex`
  
- `toIndex > length`
  
- `length < 0`, which is implied from the former inequalities

**参数**

- **fromIndex** — the lower-bound (inclusive) of the sub-range
- **toIndex** — the upper-bound (exclusive) of the sub-range
- **length** — the upper-bound (exclusive) the range

**返回**

- `fromIndex` if the sub-range within bounds of the range

**异常**

- **IndexOutOfBoundsException** — if the sub-range is out of bounds

> *Since 9*
