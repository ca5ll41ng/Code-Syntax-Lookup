---
id: "java-en-function-arrays-copyof"
language: "java"
lang: "en"
category: "function"
name: "Arrays.copyOf"
signature: "public static <T> T[] copyOf(T[] original, int newLength)"
title: "Arrays.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.copyOf

```java
public static <T> T[] copyOf(T[] original, int newLength)
```

Copies the specified array, truncating or padding with nulls (if necessary)
 so the copy has the specified length.  For all indices that are
 valid in both the original array and the copy, the two arrays will
 contain identical values.  For any indices that are valid in the
 copy but not the original, the copy will contain `null`.
 Such indices will exist if and only if the specified length
 is greater than that of the original array.
 The resulting array is of exactly the same class as the original array.

**参数**

- **the** — class of the objects in the array
- **original** — the array to be copied
- **newLength** — the length of the copy to be returned

**返回**

- a copy of the original array, truncated or padded with nulls to obtain the specified length

**异常**

- **NegativeArraySizeException** — if `newLength` is negative
- **NullPointerException** — if `original` is null

> *Since 1.6*
