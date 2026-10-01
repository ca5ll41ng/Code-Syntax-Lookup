---
id: "java-en-function-processbuilder-processbuilder"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.ProcessBuilder"
signature: "public ProcessBuilder(List<String> command)"
title: "ProcessBuilder.ProcessBuilder"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.ProcessBuilder

```java
public ProcessBuilder(List<String> command)
```

Constructs a process builder with the specified operating
 system program and arguments.  This constructor does not
 make a copy of the `command` list.  Subsequent
 updates to the list will be reflected in the state of the
 process builder.  It is not checked whether
 `command` corresponds to a valid operating system
 command.

**参数**

- **command** — the list containing the program and its arguments
