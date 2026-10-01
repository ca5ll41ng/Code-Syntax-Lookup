---
id: "java-en-function-processhandle-pid"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.pid"
signature: "long pid()"
title: "ProcessHandle.pid"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.pid

```java
long pid()
```

Returns the native process ID of the process. The native process ID is an
 identification number that the operating system assigns to the process.
 The operating system may reuse the process ID after a process terminates.
 Use `equals(Object) equals` or
 `compareTo(ProcessHandle) compareTo` to compare ProcessHandles.

**返回**

- the native process ID of the process

**异常**

- **UnsupportedOperationException** — if the implementation does not support this operation
