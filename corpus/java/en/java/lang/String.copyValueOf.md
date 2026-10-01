---
id: "java-en-function-string-copyvalueof"
language: "java"
lang: "en"
category: "function"
name: "String.copyValueOf"
signature: "public static String copyValueOf(char[] data, int offset, int count)"
title: "String.copyValueOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.copyValueOf

```java
public static String copyValueOf(char[] data, int offset, int count)
```

Equivalent to `valueOf`.

**参数**

- **data** — the character array.
- **offset** — initial offset of the subarray.
- **count** — length of the subarray.

**返回**

- a `String` that contains the characters of the specified subarray of the character array.

**异常**

- **IndexOutOfBoundsException** — if `offset` is negative, or `count` is negative, or `offset+count` is larger than `data.length`.
