---
id: "java-en-function-process-getoutputstream"
language: "java"
lang: "en"
category: "function"
name: "Process.getOutputStream"
signature: "public abstract OutputStream getOutputStream()"
title: "Process.getOutputStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.getOutputStream

```java
public abstract OutputStream getOutputStream()
```

Returns the output stream connected to the normal input of the
 process.  Output to the stream is piped into the standard
 input of the process represented by this `Process` object.

 

If the standard input of the process has been redirected using
 `redirectInput(Redirect)
 ProcessBuilder.redirectInput`
 then this method will return a
 null output stream.

 

The output stream should be `close closed`
 when it is no longer needed.

 When writing to both `getOutputStream` and either `outputWriter`
 or `outputWriter`, `flush BufferedWriter.flush`
 should be called before writes to the `OutputStream`.

 Implementation note: It is a good idea for the returned
 output stream to be buffered.

**返回**

- the output stream connected to the normal input of the process
