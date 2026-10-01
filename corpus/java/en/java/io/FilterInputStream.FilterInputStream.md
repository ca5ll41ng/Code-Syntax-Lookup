---
id: "java-en-function-filterinputstream-filterinputstream"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.FilterInputStream"
signature: "protected FilterInputStream(InputStream in)"
title: "FilterInputStream.FilterInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.FilterInputStream

```java
protected FilterInputStream(InputStream in)
```

Creates a `FilterInputStream`
 by assigning the  argument `in`
 to the field `this.in` so as
 to remember it for later use.

**参数**

- **in** — the underlying input stream, or `null` if this instance is to be created without an underlying stream.
