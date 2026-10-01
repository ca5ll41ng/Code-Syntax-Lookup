---
id: "java-en-function-abstractstringbuilder-codepointcount"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.codePointCount"
signature: "public int codePointCount(int beginIndex, int endIndex)"
title: "AbstractStringBuilder.codePointCount"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.codePointCount

```java
public int codePointCount(int beginIndex, int endIndex)
```

Returns the number of Unicode code points in the specified text
 range of this sequence. The text range begins at the specified
 `beginIndex` and extends to the `char` at
 index `endIndex - 1`. Thus the length (in
 `char`s) of the text range is
 `endIndex-beginIndex`. Unpaired surrogates within
 this sequence count as one code point each.

**参数**

- **beginIndex** — the index to the first `char` of the text range.
- **endIndex** — the index after the last `char` of the text range.

**返回**

- the number of Unicode code points in the specified text range

**异常**

- **IndexOutOfBoundsException** — if the `beginIndex` is negative, or `endIndex` is larger than the length of this sequence, or `beginIndex` is larger than `endIndex`.
