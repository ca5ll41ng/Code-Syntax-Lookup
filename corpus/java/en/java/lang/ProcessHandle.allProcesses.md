---
id: "java-en-function-processhandle-allprocesses"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.allProcesses"
signature: "static Stream<ProcessHandle> allProcesses()"
title: "ProcessHandle.allProcesses"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.allProcesses

```java
static Stream<ProcessHandle> allProcesses()
```

Returns a snapshot of all processes visible to the current process.
 

 Note that processes are created and terminate asynchronously. There
 is no guarantee that a process in the stream is alive or that no other
 processes may have been created since the inception of the snapshot.

**返回**

- a Stream of ProcessHandles for all processes

**异常**

- **UnsupportedOperationException** — if the implementation does not support this operation
