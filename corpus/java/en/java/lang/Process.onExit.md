---
id: "java-en-function-process-onexit"
language: "java"
lang: "en"
category: "function"
name: "Process.onExit"
signature: "public CompletableFuture<Process> onExit()"
title: "Process.onExit"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.onExit

```java
public CompletableFuture<Process> onExit()
```

Returns a `CompletableFuture` for the termination of the Process.
 The `java.util.concurrent.CompletableFuture` provides the ability
 to trigger dependent functions or actions that may be run synchronously
 or asynchronously upon process termination.
 When the process has terminated the CompletableFuture is
 `complete completed` regardless
 of the exit status of the process.
 

 Calling `onExit().get()` waits for the process to terminate and returns
 the Process. The future can be used to check if the process is
 `isDone done` or to
 `get() wait` for it to terminate.
 `cancel(boolean) Cancelling`
 the CompletableFuture does not affect the Process.
 

 Processes returned from `start` override the
 default implementation to provide an efficient mechanism to wait
 for process exit.

 Using `onExit() onExit` is an alternative to
 `waitFor() waitFor` that enables both additional concurrency
 and convenient access to the result of the Process.
 Lambda expressions can be used to evaluate the result of the Process
 execution.
 If there is other processing to be done before the value is used
 then `onExit onExit` is a convenient mechanism to
 free the current thread and block only if and when the value is needed.
 

 For example, launching a process to compare two files and get a boolean if they are identical:
 {@snippet lang = "java" :
     Process p = new ProcessBuilder("cmp", "f1", "f2").start();
     Future identical = p.onExit().thenApply(p1 -> p1.exitValue() == 0);
     ...
     if (identical.get()) { ... }
 }

 This implementation executes `waitFor` in a separate thread
 repeatedly until it returns successfully. If the execution of
 `waitFor` is interrupted, the thread's interrupted status is preserved.
 

 When `waitFor` returns successfully the CompletableFuture is
 `complete completed` regardless
 of the exit status of the process.

 This implementation may consume a lot of memory for thread stacks if a
 large number of processes are waited for concurrently.
 

 External implementations should override this method and provide
 a more efficient implementation. For example, to delegate to the underlying
 process, it can do the following:
 {@snippet lang = "java" :
    public CompletableFuture onExit() {
       return delegate.onExit().thenApply(p -> this);
    }
 }
 The process may be observed to have terminated with `isAlive`
 before the ComputableFuture is completed and dependent actions are invoked.

**返回**

- a new `CompletableFuture` for the Process

> *Since 9*
