---
id: "java-en-function-writer-nullwriter"
language: "java"
lang: "en"
category: "function"
name: "Writer.nullWriter"
signature: "public static Writer nullWriter()"
title: "Writer.nullWriter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Writer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Writer.nullWriter

```java
public static Writer nullWriter()
```

Returns a new `Writer` which discards all characters.  The
 returned stream is initially open.  The stream is closed by calling
 the `close()` method.  Subsequent calls to `close()` have
 no effect.

 

 While the stream is open, the `append(char)`, `append(CharSequence)`, `append(CharSequence, int, int)`,
 `flush()`, `write(int)`, `write(char[])`, and
 `write(char[], int, int)` methods do nothing. After the stream
 has been closed, these methods all throw `IOException`.

 

 The `lock object` used to synchronize operations on the
 returned `Writer` is not specified.

**返回**

- a `Writer` which discards all characters

> *Since 11*
