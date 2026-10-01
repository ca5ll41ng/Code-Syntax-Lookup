---
id: "java-en-function-process-descendants"
language: "java"
lang: "en"
category: "function"
name: "Process.descendants"
signature: "public Stream<ProcessHandle> descendants()"
title: "Process.descendants"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.descendants

```java
public Stream<ProcessHandle> descendants()
```

Returns a snapshot of the descendants of the process.
 The descendants of a process are the children of the process
 plus the descendants of those children, recursively.
 Typically, a process that is `isAlive not alive` has no children.
 

 Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `isAlive alive`.
 

 This implementation returns all children as:
 `toHandle toHandle`.

**返回**

- a sequential Stream of ProcessHandles for processes that are descendants of the process

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
