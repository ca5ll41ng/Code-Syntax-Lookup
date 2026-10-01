---
id: "java-en-function-bytearrayinputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayInputStream.mark"
signature: "protected int mark = 0"
title: "ByteArrayInputStream.mark"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayInputStream.mark

```java
protected int mark = 0
```

The currently marked position in the stream.
 ByteArrayInputStream objects are marked at position zero by
 default when constructed.  They may be marked at another
 position within the buffer by the `mark()` method.
 The current buffer position is set to this point by the
 `reset()` method.
 

 If no mark has been set, then the value of mark is the offset
 passed to the constructor (or 0 if the offset was not supplied).

> *Since 1.1*
