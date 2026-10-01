---
id: "java-en-function-process-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "Process.getInputStream"
signature: "public abstract InputStream getInputStream()"
title: "Process.getInputStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.getInputStream

```java
public abstract InputStream getInputStream()
```

Returns the input stream connected to the normal output of the
 process.  The stream obtains data piped from the standard
 output of the process represented by this `Process` object.

 

If the standard output of the process has been redirected using
 `redirectOutput(Redirect)
 ProcessBuilder.redirectOutput`
 then this method will return a
 null input stream.

 

Otherwise, if the standard error of the process has been
 redirected using
 `redirectErrorStream(boolean)
 ProcessBuilder.redirectErrorStream`
 then the input stream returned by this method will receive the
 merged standard output and the standard error of the process.

 

The input stream should be `close closed`
 when it is no longer needed.

 Use either this method or an `inputReader() input reader`
 but not both on the same `Process`.
 The input reader consumes and buffers bytes from the input stream.
 Bytes read from the input stream would not be seen by the reader and
 buffer contents are unpredictable.

 Implementation note: It is a good idea for the returned
 input stream to be buffered.

**返回**

- the input stream connected to the normal output of the process
