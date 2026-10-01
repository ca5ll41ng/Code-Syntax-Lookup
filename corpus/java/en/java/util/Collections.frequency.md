---
id: "java-en-function-collections-frequency"
language: "java"
lang: "en"
category: "function"
name: "Collections.frequency"
signature: "public static int frequency(Collection<?> c, Object o)"
title: "Collections.frequency"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.frequency

```java
public static int frequency(Collection<?> c, Object o)
```

Returns the number of elements in the specified collection equal to the
 specified object.  More formally, returns the number of elements
 `e` in the collection such that
 `Objects.equals(o, e)`.

**参数**

- **c** — the collection in which to determine the frequency of `o`
- **o** — the object whose frequency is to be determined

**返回**

- the number of elements in `c` equal to `o`

**异常**

- **NullPointerException** — if `c` is null

> *Since 1.5*
