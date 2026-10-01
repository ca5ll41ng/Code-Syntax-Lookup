---
id: "java-en-function-process-tohandle"
language: "java"
lang: "en"
category: "function"
name: "Process.toHandle"
signature: "public ProcessHandle toHandle()"
title: "Process.toHandle"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.toHandle

```java
public ProcessHandle toHandle()
```

Returns a ProcessHandle for the Process.

 `Process` objects returned by `start` and
 `exec` implement `toHandle` as the equivalent of
 `of`.

 This implementation throws an instance of
 `java.lang.UnsupportedOperationException` and performs no other action.
 Subclasses should override this method to provide a ProcessHandle for the
 process.  The methods `pid`, `info`, `children`,
 and `descendants`, unless overridden, operate on the ProcessHandle.

**返回**

- Returns a ProcessHandle for the Process

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
