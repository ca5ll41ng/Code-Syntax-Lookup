---
id: "java-en-function-processhandle-descendants"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.descendants"
signature: "Stream<ProcessHandle> descendants()"
title: "ProcessHandle.descendants"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.descendants

```java
Stream<ProcessHandle> descendants()
```

Returns a snapshot of the descendants of the process.
 The descendants of a process are the children of the process
 plus the descendants of those children, recursively.
 Typically, a process that is `isAlive not alive` has no children.
 

 Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `isAlive alive`.

**返回**

- a sequential Stream of ProcessHandles for processes that are descendants of the process
