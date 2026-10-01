---
id: "java-en-function-arraylist-removerange"
language: "java"
lang: "en"
category: "function"
name: "ArrayList.removeRange"
signature: "protected void removeRange(int fromIndex, int toIndex)"
title: "ArrayList.removeRange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayList.removeRange

```java
protected void removeRange(int fromIndex, int toIndex)
```

Removes from this list all of the elements whose index is between
 `fromIndex`, inclusive, and `toIndex`, exclusive.
 Shifts any succeeding elements to the left (reduces their index).
 This call shortens the list by `(toIndex - fromIndex)` elements.
 (If `toIndex==fromIndex`, this operation has no effect.)

**异常**

- **IndexOutOfBoundsException** — if `fromIndex` or `toIndex` is out of range (`fromIndex < 0 || toIndex > size() || toIndex < fromIndex`)
