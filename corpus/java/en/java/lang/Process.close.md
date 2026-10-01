---
id: "java-en-function-process-close"
language: "java"
lang: "en"
category: "function"
name: "Process.close"
signature: "public void close() throws IOException"
title: "Process.close"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.close

```java
public void close() throws IOException
```

Closes all reader and writer streams and waits for the process to terminate.
 This method is idempotent, if this `Process` has already been closed
 invoking this method has no effect.
 

 If the data from the process input or error streams is needed, it must be read before
 calling this method. The contents of streams that have not been read to end of stream
 are lost, they are discarded or ignored.
 

 If the process exit value is of interest, then the caller must
 `waitFor() wait for` the process to terminate before calling this method.
 

 Streams should be closed when no longer needed.
 Closing an already closed stream usually has no effect but is specific to the stream.
 If an `IOException` occurs when closing a stream it is thrown
 after the process has terminated.
 Exceptions thrown by closing the streams, if any, are added to the first
 `IOException` as `addSuppressed suppressed exceptions`.
 

 After the streams are closed this method `waitFor() waits for` the
 process to terminate. If `interrupt interrupted` while waiting
 the process is `destroyForcibly() forcibly destroyed` and
 this method continues to wait for the process to terminate.
 The interrupted status is re-asserted before this method returns or
 any `IOExceptions` are thrown.
 Try-with-resources example to write text to a process, read back the
 response, and close the streams and process:
 {@snippet file="ProcessExamples.java" region=example}

 Concrete implementations that override this class are strongly encouraged to
 override this method and invoke the superclass `close` method.

 This method closes the process I/O streams and then
 `waitFor() waits for` the process to terminate.
 If `waitFor` is `interrupt() interrupted`
 the process is `destroyForcibly() forcibly destroyed`
 and then `close()` waits for the process to terminate.

**异常**

- **IOException** — if closing any of the streams throws an exception

> *Since 26*
