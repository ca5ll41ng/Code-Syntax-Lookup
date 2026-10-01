---
id: "java-en-function-abstractstringbuilder-codepointat"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.codePointAt"
signature: "public int codePointAt(int index)"
title: "AbstractStringBuilder.codePointAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.codePointAt

```java
public int codePointAt(int index)
```

Returns the character (Unicode code point) at the specified
 index. The index refers to `char` values
 (Unicode code units) and ranges from `0` to
 `length``- 1`.

 

 If the `char` value specified at the given index
 is in the high-surrogate range, the following index is less
 than the length of this sequence, and the
 `char` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `char` value at the given index is returned.

**参数**

- **index** — the index to the `char` values

**返回**

- the code point value of the character at the `index`

**异常**

- **IndexOutOfBoundsException** — if the `index` argument is negative or not less than the length of this sequence.
