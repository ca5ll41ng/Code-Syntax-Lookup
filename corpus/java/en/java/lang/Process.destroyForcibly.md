---
id: "java-en-function-process-destroyforcibly"
language: "java"
lang: "en"
category: "function"
name: "Process.destroyForcibly"
signature: "public Process destroyForcibly()"
title: "Process.destroyForcibly"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.destroyForcibly

```java
public Process destroyForcibly()
```

Kills the process forcibly. The process represented by this
 `Process` object is forcibly terminated.
 Forcible process destruction is defined as the immediate termination of a
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 

 The `java.util.concurrent.CompletableFuture` from `onExit` is
 `complete completed`
 when the process has terminated.
 

 Invoking this method on `Process` objects returned by
 `start` and `exec` forcibly terminate
 the process.

 The default implementation of this method invokes `destroy`
 and so may not forcibly terminate the process.
 Concrete implementations of this class are strongly encouraged to override
 this method with a compliant implementation.
 The process may not terminate immediately.
 i.e. `isAlive()` may return true for a brief period
 after `destroyForcibly()` is called. This method
 may be chained to `waitFor()` if needed.

**返回**

- the `Process` object representing the process forcibly destroyed

> *Since 1.8*
