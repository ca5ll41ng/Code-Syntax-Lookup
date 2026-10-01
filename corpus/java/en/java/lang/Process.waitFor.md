---
id: "java-en-function-process-waitfor"
language: "java"
lang: "en"
category: "function"
name: "Process.waitFor"
signature: "public abstract int waitFor() throws InterruptedException"
title: "Process.waitFor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.waitFor

```java
public abstract int waitFor() throws InterruptedException
```

Causes the current thread to wait, if necessary, until the
 process represented by this `Process` object has
 terminated.  This method returns immediately if the process
 has already terminated.  If the process has not yet
 terminated, the calling thread will be blocked until the
 process exits.

**返回**

- the exit value of the process represented by this `Process` object.  By convention, the value `0` indicates normal termination.

**异常**

- **InterruptedException** — if the current thread is `interrupt() interrupted` by another thread while it is waiting, then the wait is ended and an `InterruptedException` is thrown.
