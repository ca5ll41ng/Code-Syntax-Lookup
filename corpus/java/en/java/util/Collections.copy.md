---
id: "java-en-function-collections-copy"
language: "java"
lang: "en"
category: "function"
name: "Collections.copy"
signature: "public static <T> void copy(List<? super T> dest, List<? extends T> src)"
title: "Collections.copy"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.copy

```java
public static <T> void copy(List<? super T> dest, List<? extends T> src)
```

Copies all of the elements from one list into another.  After the
 operation, the index of each copied element in the destination list
 will be identical to its index in the source list.  The destination
 list's size must be greater than or equal to the source list's size.
 If it is greater, the remaining elements in the destination list are
 unaffected. 

 This method runs in linear time.

**参数**

- **the** — class of the objects in the lists
- **dest** — The destination list.
- **src** — The source list.

**异常**

- **IndexOutOfBoundsException** — if the destination list is too small to contain the entire source List.
- **UnsupportedOperationException** — if the destination list's list-iterator does not support the `set` operation.
