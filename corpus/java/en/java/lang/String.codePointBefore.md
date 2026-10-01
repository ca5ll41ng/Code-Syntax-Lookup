---
id: "java-en-function-string-codepointbefore"
language: "java"
lang: "en"
category: "function"
name: "String.codePointBefore"
signature: "public int codePointBefore(int index)"
title: "String.codePointBefore"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.codePointBefore

```java
public int codePointBefore(int index)
```

Returns the character (Unicode code point) before the specified
 index. The index refers to `char` values
 (Unicode code units) and ranges from `1` to `length() length`.

 

 If the `char` value at `(index - 1)`
 is in the low-surrogate range, `(index - 2)` is not
 negative, and the `char` value at `(index -
 2)` is in the high-surrogate range, then the
 supplementary code point value of the surrogate pair is
 returned. If the `char` value at `index -
 1` is an unpaired low-surrogate or a high-surrogate, the
 surrogate value is returned.

**参数**

- **index** — the index following the code point that should be returned

**返回**

- the Unicode code point value before the given index.

**异常**

- **IndexOutOfBoundsException** — if the `index` argument is less than 1 or greater than the length of this string.

> *Since 1.5*
