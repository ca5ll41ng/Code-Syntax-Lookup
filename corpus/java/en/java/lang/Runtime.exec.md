---
id: "java-en-function-runtime-exec"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["command"],"cwe":["CWE-78"],"params":[0,1,2]}
name: "Runtime.exec"
signature: "public Process exec(String command) throws IOException"
title: "Runtime.exec"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.exec

```java
public Process exec(String command) throws IOException
```

Executes the specified string command in a separate process.

 

This is a convenience method.  An invocation of the form
 `exec(command)`
 behaves in exactly the same way as the invocation
 `exec(String, String[], File) exec``(command, null, null)`.

 In the reference implementation, logging of the created process can be enabled,
 see `start` for details.

**参数**

- **command** — a specified system command.

**返回**

- A new `Process` object for managing the subprocess

**异常**

- **IOException** — If an I/O error occurs
- **NullPointerException** — If `command` is `null`
- **IllegalArgumentException** — If `command` is empty

**参见**

- #exec(String[], String[], File)
- ProcessBuilder

> **⚠ Deprecated** — This method is error-prone and should not be used, the corresponding method `exec` or `ProcessBuilder` should be used instead. The command string is broken into tokens using only whitespace characters. For an argument with an embedded space, such as a filename, this can cause problems as the token does not include the full filename.
