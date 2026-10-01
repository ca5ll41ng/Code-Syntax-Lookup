---
id: "java-en-function-processhandleimpl-parent"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandleImpl.parent"
signature: "public Optional<ProcessHandle> parent()"
title: "ProcessHandleImpl.parent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandleImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandleImpl.parent

```java
public Optional<ProcessHandle> parent()
```

Returns a ProcessHandle for the parent process.

**返回**

- a ProcessHandle of the parent process; `null` is returned if the child process does not have a parent
