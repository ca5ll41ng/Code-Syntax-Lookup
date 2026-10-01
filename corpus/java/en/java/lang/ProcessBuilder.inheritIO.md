---
id: "java-en-function-processbuilder-inheritio"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.inheritIO"
signature: "public ProcessBuilder inheritIO()"
title: "ProcessBuilder.inheritIO"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.inheritIO

```java
public ProcessBuilder inheritIO()
```

Sets the source and destination for subprocess standard I/O
 to be the same as those of the current Java process.

 

This is a convenience method.  An invocation of the form
 {@snippet lang = "java" :
      pb.inheritIO()
 }
 behaves in exactly the same way as the invocation
 {@snippet lang = "java" :
      pb.redirectInput(Redirect.INHERIT)
          .redirectOutput(Redirect.INHERIT)
          .redirectError(Redirect.INHERIT)
 }

 This gives behavior equivalent to most operating system
 command interpreters, or the standard C library function
 `system()`.

 When the process is `start started`,
 if {#code System.out} and/or {#code System.err} have been
 closed in the current process, the corresponding output
 in the subprocess will be discarded.

**返回**

- this process builder

> *Since 1.7*
