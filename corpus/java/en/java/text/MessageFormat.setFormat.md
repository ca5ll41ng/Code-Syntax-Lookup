---
id: "java-en-function-messageformat-setformat"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.setFormat"
signature: "public void setFormat(int formatElementIndex, Format newFormat)"
title: "MessageFormat.setFormat"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.setFormat

```java
public void setFormat(int formatElementIndex, Format newFormat)
```

Sets the format to use for the format element with the given
 format element index within the previously set pattern string.
 The format element index is the zero-based number of the format
 element counting from the start of the pattern string.
 

 Since the order of format elements in a pattern string often
 changes during localization, it is generally better to use the
 `setFormatByArgumentIndex setFormatByArgumentIndex`
 method, which accesses format elements based on the argument
 index they specify.

**参数**

- **formatElementIndex** — the index of a format element within the pattern
- **newFormat** — the format to use for the specified format element

**异常**

- **ArrayIndexOutOfBoundsException** — if `formatElementIndex` is equal to or larger than the number of format elements in the pattern string
