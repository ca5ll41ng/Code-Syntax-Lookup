---
id: "java-en-function-abstractstringbuilder-subsequence"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.subSequence"
signature: "public CharSequence subSequence(int start, int end)"
title: "AbstractStringBuilder.subSequence"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.subSequence

```java
public CharSequence subSequence(int start, int end)
```

Returns a character sequence that is a subsequence of this sequence.

 

 An invocation of this method of the form

 
```
`sb.subSequence(begin, end)`
```

 behaves in exactly the same way as the invocation

 
```
`sb.substring(begin, end)`
```

 This method is provided so that this class can
 implement the `CharSequence` interface.

**参数**

- **start** — the start index, inclusive.
- **end** — the end index, exclusive.

**返回**

- the specified subsequence.

**异常**

- **IndexOutOfBoundsException** — if `start` or `end` are negative, if `end` is greater than `length()`, or if `start` is greater than `end`
