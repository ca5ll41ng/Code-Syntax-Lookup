---
id: "java-en-function-abstractstringbuilder-charat"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.charAt"
signature: "public char charAt(int index)"
title: "AbstractStringBuilder.charAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.charAt

```java
public char charAt(int index)
```

Returns the `char` value in this sequence at the specified index.
 The first `char` value is at index `0`, the next at index
 `1`, and so on, as in array indexing.
 

 The index argument must be greater than or equal to
 `0`, and less than the length of this sequence.

 

If the `char` value specified by the index is a
 surrogate, the surrogate
 value is returned.

**参数**

- **index** — the index of the desired `char` value.

**返回**

- the `char` value at the specified index.

**异常**

- **IndexOutOfBoundsException** — if `index` is negative or greater than or equal to `length()`.
