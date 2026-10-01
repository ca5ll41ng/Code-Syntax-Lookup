---
id: "java-en-function-process-children"
language: "java"
lang: "en"
category: "function"
name: "Process.children"
signature: "public Stream<ProcessHandle> children()"
title: "Process.children"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.children

```java
public Stream<ProcessHandle> children()
```

Returns a snapshot of the direct children of the process.
 The parent of a direct child process is the process.
 Typically, a process that is `isAlive not alive` has no children.
 

 Note that processes are created and terminate asynchronously.
 There is no guarantee that a process is `isAlive alive`.
 

 This implementation returns the direct children as:
 `toHandle toHandle`.

**返回**

- a sequential Stream of ProcessHandles for processes that are direct children of the process

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
