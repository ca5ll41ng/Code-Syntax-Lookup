---
id: "java-en-function-messageformat-getformatsbyargumentindex"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.getFormatsByArgumentIndex"
signature: "public Format[] getFormatsByArgumentIndex()"
title: "MessageFormat.getFormatsByArgumentIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.getFormatsByArgumentIndex

```java
public Format[] getFormatsByArgumentIndex()
```

Gets the formats used for the values passed into
 `format` methods or returned from `parse`
 methods. The indices of elements in the returned array
 correspond to the argument indices used in the previously set
 pattern string.
 The order of formats in the returned array thus corresponds to
 the order of elements in the `arguments` array passed
 to the `format` methods or the result array returned
 by the `parse` methods.
 

 If an argument index is used for more than one format element
 in the pattern string, then the format used for the last such
 format element is returned in the array. If an argument index
 is not used for any format element in the pattern string, then
 null is returned in the array.

**返回**

- the formats used for the arguments within the pattern

> *Since 1.4*
