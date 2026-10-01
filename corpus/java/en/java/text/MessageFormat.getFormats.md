---
id: "java-en-function-messageformat-getformats"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.getFormats"
signature: "public Format[] getFormats()"
title: "MessageFormat.getFormats"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.getFormats

```java
public Format[] getFormats()
```

Gets the formats used for the format elements in the
 previously set pattern string.
 The order of formats in the returned array corresponds to
 the order of format elements in the pattern string.
 

 Since the order of format elements in a pattern string often
 changes during localization, it's generally better to use the
 `getFormatsByArgumentIndex getFormatsByArgumentIndex`
 method, which assumes an order of formats corresponding to the
 order of elements in the `arguments` array passed to
 the `format` methods or the result array returned by
 the `parse` methods.

**返回**

- the formats used for the format elements in the pattern
