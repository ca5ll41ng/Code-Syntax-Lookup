---
id: "java-en-function-runtime-halt"
language: "java"
lang: "en"
category: "function"
name: "Runtime.halt"
signature: "public void halt(int status)"
title: "Runtime.halt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.halt

```java
public void halt(int status)
```

Immediately `#termination terminates` the Java Virtual Machine.
 Termination of the Java Virtual Machine is unconditional and immediate.
 This method does not initiate the `#shutdown shutdown sequence`, nor does
 it wait for the shutdown sequence to finish if it is already in progress. An
 invocation of this method never returns normally.

 This method should be used with extreme caution. Using it may circumvent or disrupt
 any cleanup actions intended to be performed by shutdown hooks, possibly leading to
 data corruption. See the `#termination termination` section above
 for other possible consequences of halting the Java Virtual Machine.

**参数**

- **status** — Termination status. By convention, a nonzero status code indicates abnormal termination. If the `exit exit` (equivalently, `exit(int) System.exit`) method has already been invoked then this status code will override the status code passed to that method.

**参见**

- #exit
- #addShutdownHook
- #removeShutdownHook

> *Since 1.3*
