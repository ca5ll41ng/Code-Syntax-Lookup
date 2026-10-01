---
id: "java-en-function-processhandle-equals"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.equals"
signature: "boolean equals(Object other)"
title: "ProcessHandle.equals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.equals

```java
boolean equals(Object other)
```

Returns `true` if `other` object is non-null, is of the
 same implementation, and represents the same system process;
 otherwise it returns `false`.
 It is implementation specific whether ProcessHandles with the same PID
 represent the same system process. ProcessHandle implementations
 should contain additional information to uniquely identify the process.
 For example, the start time of the process could be used
 to determine if the PID has been re-used.
 The implementation of `equals` should return `true` for two
 ProcessHandles with the same PID unless there is information to
 distinguish them.

**参数**

- **other** — another object

**返回**

- `true` if the `other` object is non-null, is of the same implementation class and represents the same system process; otherwise returns `false`
