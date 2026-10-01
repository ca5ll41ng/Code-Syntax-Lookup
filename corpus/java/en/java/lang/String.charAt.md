---
id: "java-en-function-string-charat"
language: "java"
lang: "en"
category: "function"
name: "String.charAt"
signature: "public char charAt(int index)"
title: "String.charAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.charAt

```java
public char charAt(int index)
```

Returns the `char` value at the
 specified index. An index ranges from `0` to
 `length() - 1`. The first `char` value of the sequence
 is at index `0`, the next at index `1`,
 and so on, as for array indexing.

 

If the `char` value specified by the index is a
 surrogate, the surrogate
 value is returned.

**参数**

- **index** — the index of the `char` value.

**返回**

- the `char` value at the specified index of this string. The first `char` value is at index `0`.

**异常**

- **IndexOutOfBoundsException** — if the `index` argument is negative or not less than the length of this string.
