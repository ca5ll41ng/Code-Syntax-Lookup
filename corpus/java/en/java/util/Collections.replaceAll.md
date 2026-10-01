---
id: "java-en-function-collections-replaceall"
language: "java"
lang: "en"
category: "function"
name: "Collections.replaceAll"
signature: "public static <T> boolean replaceAll(List<T> list, T oldVal, T newVal)"
title: "Collections.replaceAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.replaceAll

```java
public static <T> boolean replaceAll(List<T> list, T oldVal, T newVal)
```

Replaces all occurrences of one specified value in a list with another.
 More formally, replaces with `newVal` each element `e`
 in `list` such that
 `(oldVal==null ? e==null : oldVal.equals(e))`.
 (This method has no effect on the size of the list.)

**参数**

- **the** — class of the objects in the list
- **list** — the list in which replacement is to occur.
- **oldVal** — the old value to be replaced.
- **newVal** — the new value with which `oldVal` is to be replaced.

**返回**

- `true` if `list` contained one or more elements `e` such that `(oldVal==null ?  e==null : oldVal.equals(e))`.

**异常**

- **UnsupportedOperationException** — if the specified list or its list-iterator does not support the `set` operation.

> *Since 1.4*
