---
id: "java-en-function-process-destroy"
language: "java"
lang: "en"
category: "function"
name: "Process.destroy"
signature: "public abstract void destroy()"
title: "Process.destroy"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.destroy

```java
public abstract void destroy()
```

Kills the process.
 Whether the process represented by this `Process` object is
 `supportsNormalTermination normally terminated` or not is
 implementation dependent.
 Forcible process destruction is defined as the immediate termination of a
 process, whereas normal termination allows the process to shut down cleanly.
 If the process is not alive, no action is taken.
 

 The `java.util.concurrent.CompletableFuture` from `onExit` is
 `complete completed`
 when the process has terminated.
