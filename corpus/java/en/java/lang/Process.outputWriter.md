---
id: "java-en-function-process-outputwriter"
language: "java"
lang: "en"
category: "function"
name: "Process.outputWriter"
signature: "public final BufferedWriter outputWriter()"
title: "Process.outputWriter"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.outputWriter

```java
public final BufferedWriter outputWriter()
```

Returns a `BufferedWriter` connected to the normal input of the process
 using the native encoding.
 Writes text to a character-output stream, buffering characters to provide
 for the efficient writing of single characters, arrays, and strings.

 

This method delegates to `outputWriter` using the
 `Charset` named by the `native.encoding` system property.
 If the `native.encoding` is not a valid charset name or not supported
 the `defaultCharset` is used.

 

The output writer should be `close closed`
 when it is no longer needed.

**返回**

- a `BufferedWriter` to the standard input of the process using the charset for the `native.encoding` system property

> *Since 17*
