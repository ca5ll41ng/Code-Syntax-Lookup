---
id: "java-en-function-process-geterrorstream"
language: "java"
lang: "en"
category: "function"
name: "Process.getErrorStream"
signature: "public abstract InputStream getErrorStream()"
title: "Process.getErrorStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.getErrorStream

```java
public abstract InputStream getErrorStream()
```

Returns the input stream connected to the error output of the
 process.  The stream obtains data piped from the error output
 of the process represented by this `Process` object.

 

If the standard error of the process has been redirected using
 `redirectError(Redirect)
 ProcessBuilder.redirectError` or
 `redirectErrorStream(boolean)
 ProcessBuilder.redirectErrorStream`
 then this method will return a
 null input stream.

 

The error stream should be `close closed`
 when it is no longer needed.

 Use either this method or an `errorReader() error reader`
 but not both on the same `Process`.
 The error reader consumes and buffers bytes from the error stream.
 Bytes read from the error stream would not be seen by the reader and the
 buffer contents are unpredictable.

 Implementation note: It is a good idea for the returned
 input stream to be buffered.

**返回**

- the input stream connected to the error output of the process
