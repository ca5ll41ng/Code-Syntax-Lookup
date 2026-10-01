---
id: "java-en-function-processhandle-onexit"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.onExit"
signature: "CompletableFuture<ProcessHandle> onExit()"
title: "ProcessHandle.onExit"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.onExit

```java
CompletableFuture<ProcessHandle> onExit()
```

Returns a `CompletableFuture` for the termination
 of the process.
 The `java.util.concurrent.CompletableFuture` provides the ability
 to trigger dependent functions or actions that may be run synchronously
 or asynchronously upon process termination.
 When the process has terminated the CompletableFuture is
 `complete completed` regardless
 of the exit status of the process.
 The `onExit` method can be called multiple times to invoke
 independent actions when the process exits.
 

 Calling `onExit().get()` waits for the process to terminate and returns
 the ProcessHandle. The future can be used to check if the process is
 `isDone done` or to
 `get() wait` for it to terminate.
 `cancel(boolean) Cancelling`
 the `CompletableFuture CompletableFuture` does not affect the Process.
 The process may be observed to have terminated with `isAlive`
 before the `CompletableFuture` is completed and dependent actions are invoked.

**返回**

- a new `CompletableFuture` for the ProcessHandle

**异常**

- **IllegalStateException** — if the process is the current process
