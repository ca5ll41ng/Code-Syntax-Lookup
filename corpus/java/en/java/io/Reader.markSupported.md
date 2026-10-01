---
id: "java-en-function-reader-marksupported"
language: "java"
lang: "en"
category: "function"
name: "Reader.markSupported"
signature: "public boolean markSupported()"
title: "Reader.markSupported"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.markSupported

```java
public boolean markSupported()
```

Tells whether this stream supports the mark() operation. The default
 implementation always returns false. Subclasses should override this
 method.

**返回**

- true if and only if this stream supports the mark operation.
