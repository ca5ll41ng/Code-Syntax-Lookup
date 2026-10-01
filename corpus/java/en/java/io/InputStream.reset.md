---
id: "java-en-function-inputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "InputStream.reset"
signature: "public void reset() throws IOException"
title: "InputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.reset

```java
public void reset() throws IOException
```

Repositions this stream to the position at the time the
 `mark` method was last called on this input stream.

 

 The general contract of `reset` is:

 
 
-  If the method `markSupported` returns
 `true`, then:

     
-  If the method `mark` has not been called since
     the stream was created, or the number of bytes read from the stream
     since `mark` was last called is larger than the argument
     to `mark` at that last call, then an
     `IOException` might be thrown.

     
-  If such an `IOException` is not thrown, then the
     stream is reset to a state such that all the bytes read since the
     most recent call to `mark` (or since the start of the
     file, if `mark` has not been called) will be resupplied
     to subsequent callers of the `read` method, followed by
     any bytes that otherwise would have been the next input data as of
     the time of the call to `reset`. 

 
-  If the method `markSupported` returns
 `false`, then:

     
-  The call to `reset` may throw an
     `IOException`.

     
-  If an `IOException` is not thrown, then the stream
     is reset to a fixed state that depends on the particular type of the
     input stream and how it was created. The bytes that will be supplied
     to subsequent callers of the `read` method depend on the
     particular type of the input stream. 

 The method `reset` for class `InputStream`
 does nothing except throw an `IOException`.

**异常**

- **IOException** — if this stream has not been marked or if the mark has been invalidated.

**参见**

- java.io.InputStream#mark(int)
- java.io.IOException
