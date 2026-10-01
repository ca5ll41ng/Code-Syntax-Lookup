---
id: "java-en-function-process-inputreader"
language: "java"
lang: "en"
category: "function"
name: "Process.inputReader"
signature: "public final BufferedReader inputReader()"
title: "Process.inputReader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.inputReader

```java
public final BufferedReader inputReader()
```

Returns a `BufferedReader BufferedReader` connected to the standard
 output of the process. The `Charset` for the native encoding is used
 to read characters, lines, or stream lines from standard output.

 

This method delegates to `inputReader` using the
 `Charset` named by the `native.encoding` system property.
 If the `native.encoding` is not a valid charset name or not supported
 the `defaultCharset` is used.

 

The reader should be `close closed`
 when it is no longer needed.

 Use either this method or the `getInputStream input stream`
 but not both on the same `Process`.
 The input reader consumes and buffers bytes from the input stream.
 Bytes read from the input stream would not be seen by the reader and the
 buffer contents are unpredictable.

**返回**

- a `BufferedReader BufferedReader` using the `native.encoding` if supported, otherwise, the `defaultCharset`

> *Since 17*
