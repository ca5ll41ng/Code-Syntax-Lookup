---
id: "java-en-function-messageformat-setformatsbyargumentindex"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.setFormatsByArgumentIndex"
signature: "public void setFormatsByArgumentIndex(Format[] newFormats)"
title: "MessageFormat.setFormatsByArgumentIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.setFormatsByArgumentIndex

```java
public void setFormatsByArgumentIndex(Format[] newFormats)
```

Sets the formats to use for the values passed into
 `format` methods or returned from `parse`
 methods. The indices of elements in `newFormats`
 correspond to the argument indices used in the previously set
 pattern string.
 The order of formats in `newFormats` thus corresponds to
 the order of elements in the `arguments` array passed
 to the `format` methods or the result array returned
 by the `parse` methods.
 

 If an argument index is used for more than one format element
 in the pattern string, then the corresponding new format is used
 for all such format elements. If an argument index is not used
 for any format element in the pattern string, then the
 corresponding new format is ignored. If fewer formats are provided
 than needed, then only the formats for argument indices less
 than `newFormats.length` are replaced.

**参数**

- **newFormats** — the new formats to use

**异常**

- **NullPointerException** — if `newFormats` is null

> *Since 1.4*
