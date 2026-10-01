---
id: "java-en-function-reader-nullreader"
language: "java"
lang: "en"
category: "function"
name: "Reader.nullReader"
signature: "public static Reader nullReader()"
title: "Reader.nullReader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.nullReader

```java
public static Reader nullReader()
```

Returns a new `Reader` that reads no characters. The returned
 stream is initially open.  The stream is closed by calling the
 `close()` method.  Subsequent calls to `close()` have no
 effect.

 

 While the stream is open, the `read()`, `read(char[])`,
 `read(char[], int, int)`, `read(CharBuffer)`, `ready()`, `skip(long)`, and `transferTo()` methods all
 behave as if end of stream has been reached. After the stream has been
 closed, these methods all throw `IOException`.

 

 The `markSupported()` method returns `false`.  The
 `mark()` and `reset()` methods throw an `IOException`.

 

 The `lock object` used to synchronize operations on the
 returned `Reader` is not specified.

**返回**

- a `Reader` which reads no characters

> *Since 11*
