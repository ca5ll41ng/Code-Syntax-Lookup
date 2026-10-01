---
id: "java-en-function-processhandle-children"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.children"
signature: "Stream<ProcessHandle> children()"
title: "ProcessHandle.children"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.children

```java
Stream<ProcessHandle> children()
```

Returns a snapshot of the current direct children of the process.
 The `parent` of a direct child process is the process.
 Typically, a process that is `isAlive not alive` has no children.
 

 Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `isAlive alive`.

**返回**

- a sequential Stream of ProcessHandles for processes that are direct children of the process
