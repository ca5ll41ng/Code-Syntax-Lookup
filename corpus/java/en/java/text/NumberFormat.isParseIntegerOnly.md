---
id: "java-en-function-numberformat-isparseintegeronly"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.isParseIntegerOnly"
signature: "public boolean isParseIntegerOnly()"
title: "NumberFormat.isParseIntegerOnly"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.isParseIntegerOnly

```java
public boolean isParseIntegerOnly()
```

Returns `true` if this format will parse numbers as integers only.
 The `ParsePosition` index will be set to the position of the decimal
 symbol. The exact format accepted by the parse operation is locale dependent.
 For example in the English locale, with ParseIntegerOnly true, the
 string "123.45" would be parsed as the integer value 123.

**返回**

- `true` if numbers should be parsed as integers only; `false` otherwise
