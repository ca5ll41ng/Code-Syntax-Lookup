---
id: "java-en-function-charsequence-charat"
language: "java"
lang: "en"
category: "function"
name: "CharSequence.charAt"
signature: "char charAt(int index)"
title: "CharSequence.charAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharSequence.charAt

```java
char charAt(int index)
```

Returns the `char` value at the specified index.  An index ranges from zero
 to `length() - 1`.  The first `char` value of the sequence is at
 index zero, the next at index one, and so on, as for array
 indexing.

 

If the `char` value specified by the index is a
 `#unicode surrogate`, the surrogate value
 is returned.

**参数**

- **index** — the index of the `char` value to be returned

**返回**

- the specified `char` value

**异常**

- **IndexOutOfBoundsException** — if the `index` argument is negative or not less than `length()`
