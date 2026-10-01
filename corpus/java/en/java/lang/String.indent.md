---
id: "java-en-function-string-indent"
language: "java"
lang: "en"
category: "function"
name: "String.indent"
signature: "public String indent(int n)"
title: "String.indent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.indent

```java
public String indent(int n)
```

Adjusts the indentation of each line of this string based on the value of
 `n`, and normalizes line termination characters.
 

 This string is conceptually separated into lines using
 `lines`. Each line is then adjusted as described below
 and then suffixed with a line feed `"\n"` (U+000A). The resulting
 lines are then concatenated and returned.
 

 If `n > 0` then `n` spaces (U+0020) are inserted at the
 beginning of each line.
 

 If `n < 0` then up to `n`
 `isWhitespace(int) white space characters` are removed
 from the beginning of each line. If a given line does not contain
 sufficient white space then all leading
 `isWhitespace(int) white space characters` are removed.
 Each white space character is treated as a single character. In
 particular, the tab character `"\t"` (U+0009) is considered a
 single character; it is not expanded.
 

 If `n == 0` then the line remains unchanged. However, line
 terminators are still normalized.

**参数**

- **n** — number of leading `isWhitespace(int) white space characters` to add or remove

**返回**

- string with indentation adjusted and line endings normalized

**参见**

- String#lines()
- String#isBlank()
- Character#isWhitespace(int)

> *Since 12*
