---
id: "java-en-function-abstractstringbuilder-offsetbycodepoints"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.offsetByCodePoints"
signature: "public int offsetByCodePoints(int index, int codePointOffset)"
title: "AbstractStringBuilder.offsetByCodePoints"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.offsetByCodePoints

```java
public int offsetByCodePoints(int index, int codePointOffset)
```

Returns the index within this sequence that is offset from the
 given `index` by `codePointOffset` code
 points. Unpaired surrogates within the text range given by
 `index` and `codePointOffset` count as
 one code point each.

**参数**

- **index** — the index to be offset
- **codePointOffset** — the offset in code points

**返回**

- the index within this sequence

**异常**

- **IndexOutOfBoundsException** — if `index` is negative or larger than the length of this sequence, or if `codePointOffset` is positive and the subsequence starting with `index` has fewer than `codePointOffset` code points, or if `codePointOffset` is negative and the subsequence before `index` has fewer than the absolute value of `codePointOffset` code points.
