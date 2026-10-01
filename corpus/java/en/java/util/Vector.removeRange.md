---
id: "java-en-function-vector-removerange"
language: "java"
lang: "en"
category: "function"
name: "Vector.removeRange"
signature: "protected synchronized void removeRange(int fromIndex, int toIndex)"
title: "Vector.removeRange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.removeRange

```java
protected synchronized void removeRange(int fromIndex, int toIndex)
```

Removes from this list all of the elements whose index is between
 `fromIndex`, inclusive, and `toIndex`, exclusive.
 Shifts any succeeding elements to the left (reduces their index).
 This call shortens the list by `(toIndex - fromIndex)` elements.
 (If `toIndex==fromIndex`, this operation has no effect.)
