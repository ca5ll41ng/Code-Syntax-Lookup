---
id: "java-en-function-collections-fill"
language: "java"
lang: "en"
category: "function"
name: "Collections.fill"
signature: "public static <T> void fill(List<? super T> list, T obj)"
title: "Collections.fill"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.fill

```java
public static <T> void fill(List<? super T> list, T obj)
```

Replaces all of the elements of the specified list with the specified
 element. 

 This method runs in linear time.

**参数**

- **the** — class of the objects in the list
- **list** — the list to be filled with the specified element.
- **obj** — The element with which to fill the specified list.

**异常**

- **UnsupportedOperationException** — if the specified list or its list-iterator does not support the `set` operation.
