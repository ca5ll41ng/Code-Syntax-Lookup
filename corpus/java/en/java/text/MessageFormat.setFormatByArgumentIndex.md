---
id: "java-en-function-messageformat-setformatbyargumentindex"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.setFormatByArgumentIndex"
signature: "public void setFormatByArgumentIndex(int argumentIndex, Format newFormat)"
title: "MessageFormat.setFormatByArgumentIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.setFormatByArgumentIndex

```java
public void setFormatByArgumentIndex(int argumentIndex, Format newFormat)
```

Sets the format to use for the format elements within the
 previously set pattern string that use the given argument
 index.
 The argument index is part of the format element definition and
 represents an index into the `arguments` array passed
 to the `format` methods or the result array returned
 by the `parse` methods.
 

 If the argument index is used for more than one format element
 in the pattern string, then the new format is used for all such
 format elements. If the argument index is not used for any format
 element in the pattern string, then the new format is ignored.

**参数**

- **argumentIndex** — the argument index for which to use the new format
- **newFormat** — the new format to use

> *Since 1.4*
