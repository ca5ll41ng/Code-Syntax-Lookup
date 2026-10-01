---
id: "java-en-function-processbuilder-command"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["command"],"cwe":["CWE-78"],"params":[0]}
name: "ProcessBuilder.command"
signature: "public ProcessBuilder command(List<String> command)"
title: "ProcessBuilder.command"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.command

```java
public ProcessBuilder command(List<String> command)
```

Sets this process builder's operating system program and
 arguments.  This method does not make a copy of the
 `command` list.  Subsequent updates to the list will
 be reflected in the state of the process builder.  It is not
 checked whether `command` corresponds to a valid
 operating system command.

**参数**

- **command** — the list containing the program and its arguments

**返回**

- this process builder
