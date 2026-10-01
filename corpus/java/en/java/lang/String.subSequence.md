---
id: "java-en-function-string-subsequence"
language: "java"
lang: "en"
category: "function"
name: "String.subSequence"
signature: "public CharSequence subSequence(int beginIndex, int endIndex)"
title: "String.subSequence"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.subSequence

```java
public CharSequence subSequence(int beginIndex, int endIndex)
```

Returns a character sequence that is a subsequence of this sequence.

 

 An invocation of this method of the form

 
```

 str.subSequence(begin,&nbsp;end)
```

 behaves in exactly the same way as the invocation

 
```

 str.substring(begin,&nbsp;end)
```

 This method is defined so that the `String` class can implement
 the `CharSequence` interface.

**参数**

- **beginIndex** — the begin index, inclusive.
- **endIndex** — the end index, exclusive.

**返回**

- the specified subsequence.

**异常**

- **IndexOutOfBoundsException** — if `beginIndex` or `endIndex` is negative, if `endIndex` is greater than `length()`, or if `beginIndex` is greater than `endIndex`

> *Since 1.4*
