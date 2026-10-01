---
id: "java-en-function-processhandle-parent"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.parent"
signature: "Optional<ProcessHandle> parent()"
title: "ProcessHandle.parent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.parent

```java
Optional<ProcessHandle> parent()
```

Returns an `Optional` for the parent process.
 Note that Processes in a zombie state usually don't have a parent.

**返回**

- an `Optional` of the parent process; the `Optional` is empty if the child process does not have a parent or if the parent is not available, possibly due to operating system limitations
