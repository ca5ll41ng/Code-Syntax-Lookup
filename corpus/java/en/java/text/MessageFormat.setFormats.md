---
id: "java-en-function-messageformat-setformats"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.setFormats"
signature: "public void setFormats(Format[] newFormats)"
title: "MessageFormat.setFormats"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.setFormats

```java
public void setFormats(Format[] newFormats)
```

Sets the formats to use for the format elements in the
 previously set pattern string.
 The order of formats in `newFormats` corresponds to
 the order of format elements in the pattern string.
 

 If more formats are provided than needed by the pattern string,
 the remaining ones are ignored. If fewer formats are provided
 than needed, then only the first `newFormats.length`
 formats are replaced.
 

 Since the order of format elements in a pattern string often
 changes during localization, it is generally better to use the
 `setFormatsByArgumentIndex setFormatsByArgumentIndex`
 method, which assumes an order of formats corresponding to the
 order of elements in the `arguments` array passed to
 the `format` methods or the result array returned by
 the `parse` methods.

**参数**

- **newFormats** — the new formats to use

**异常**

- **NullPointerException** — if `newFormats` is null
