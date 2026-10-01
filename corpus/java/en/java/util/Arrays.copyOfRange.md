---
id: "java-en-function-arrays-copyofrange"
language: "java"
lang: "en"
category: "function"
name: "Arrays.copyOfRange"
signature: "public static <T> T[] copyOfRange(T[] original, int from, int to)"
title: "Arrays.copyOfRange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.copyOfRange

```java
public static <T> T[] copyOfRange(T[] original, int from, int to)
```

Copies the specified range of the specified array into a new array.
 The initial index of the range (`from`) must lie between zero
 and `original.length`, inclusive.  The value at
 `original[from]` is placed into the initial element of the copy
 (unless `from == original.length` or `from == to`).
 Values from subsequent elements in the original array are placed into
 subsequent elements in the copy.  The final index of the range
 (`to`), which must be greater than or equal to `from`,
 may be greater than `original.length`, in which case
 `null` is placed in all elements of the copy whose index is
 greater than or equal to `original.length - from`.  The length
 of the returned array will be `to - from`.
 

 The resulting array is of exactly the same class as the original array.

**参数**

- **the** — class of the objects in the array
- **original** — the array from which a range is to be copied
- **from** — the initial index of the range to be copied, inclusive
- **to** — the final index of the range to be copied, exclusive. (This index may lie outside the array.)

**返回**

- a new array containing the specified range from the original array, truncated or padded with nulls to obtain the required length

**异常**

- **ArrayIndexOutOfBoundsException** — if `from < 0` or `from > original.length`
- **IllegalArgumentException** — if `from > to`
- **NullPointerException** — if `original` is null

> *Since 1.6*
