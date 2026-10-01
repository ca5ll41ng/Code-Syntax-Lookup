---
id: "java-en-function-string-offsetbycodepoints"
language: "java"
lang: "en"
category: "function"
name: "String.offsetByCodePoints"
signature: "public int offsetByCodePoints(int index, int codePointOffset)"
title: "String.offsetByCodePoints"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.offsetByCodePoints

```java
public int offsetByCodePoints(int index, int codePointOffset)
```

Returns the index within this `String` that is
 offset from the given `index` by
 `codePointOffset` code points. Unpaired surrogates
 within the text range given by `index` and
 `codePointOffset` count as one code point each.

**参数**

- **index** — the index to be offset
- **codePointOffset** — the offset in code points

**返回**

- the index within this `String`

**异常**

- **IndexOutOfBoundsException** — if `index` is negative or larger than the length of this `String`, or if `codePointOffset` is positive and the substring starting with `index` has fewer than `codePointOffset` code points, or if `codePointOffset` is negative and the substring before `index` has fewer than the absolute value of `codePointOffset` code points.

> *Since 1.5*
