---
id: "java-en-function-compactnumberformat-isparseintegeronly"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.isParseIntegerOnly"
signature: "public boolean isParseIntegerOnly()"
title: "CompactNumberFormat.isParseIntegerOnly"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.isParseIntegerOnly

```java
public boolean isParseIntegerOnly()
```

Returns true if this format parses only an integer from the number
 component of a compact number.
 Parsing an integer means that only an integer is considered from the
 number component, prefix/suffix is still considered to compute the
 resulting output.
 For example, in the `US US locale`, if this method
 returns `true`, the string `"1234.78 thousand"` would be
 parsed as the value `1234000` (1234 (integer part) * 1000
 (thousand)) and the fractional part would be skipped.
 The exact format accepted by the parse operation is locale dependent.
 to the position of the decimal symbol, but rather the end of the string.

**返回**

- `true` if compact numbers should be parsed as integers only; `false` otherwise
