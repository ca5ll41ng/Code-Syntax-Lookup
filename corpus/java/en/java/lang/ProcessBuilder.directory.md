---
id: "java-en-function-processbuilder-directory"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.directory"
signature: "public File directory()"
title: "ProcessBuilder.directory"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.directory

```java
public File directory()
```

Returns this process builder's working directory.

 Subprocesses subsequently started by this object's `start` method will use this as their working directory.
 The returned value may be `null` -- this means to use
 the working directory of the current Java process, usually the
 directory named by the system property `user.dir`,
 as the working directory of the child process.

**返回**

- this process builder's working directory
