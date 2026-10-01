---
id: "java-en-function-processhandle-destroyforcibly"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.destroyForcibly"
signature: "boolean destroyForcibly()"
title: "ProcessHandle.destroyForcibly"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.destroyForcibly

```java
boolean destroyForcibly()
```

Requests the process to be killed forcibly.
 The process represented by this `ProcessHandle` object is
 forcibly terminated.
 Forcible process destruction is defined as the immediate termination of the
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 The operating system access controls may prevent the process
 from being killed.
 

 The `java.util.concurrent.CompletableFuture` from `onExit` is
 `complete completed`
 when the process has terminated.
 

 Note: The process may not terminate immediately.
 For example, `isAlive()` may return true for a brief period
 after `destroyForcibly()` is called.

**返回**

- `true` if termination was successfully requested, otherwise `false`

**异常**

- **IllegalStateException** — if the process is the current process
