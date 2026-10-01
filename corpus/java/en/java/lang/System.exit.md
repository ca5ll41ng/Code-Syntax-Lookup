---
id: "java-en-function-system-exit"
language: "java"
lang: "en"
category: "function"
name: "System.exit"
signature: "public static void exit(int status)"
title: "System.exit"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.exit

```java
public static void exit(int status)
```

Initiates the `#shutdown shutdown sequence` of the Java Virtual
 Machine. This method initiates the shutdown sequence (if it is not already initiated)
 and then blocks indefinitely. This method neither returns nor throws an exception;
 that is, it does not complete either normally or abruptly.
 

 The argument serves as a status code. By convention, a nonzero status code
 indicates abnormal termination.
 

 The call `System.exit(n)` is effectively equivalent to the call:
 {@snippet :
     Runtime.getRuntime().exit(n)
 }

 The initiation of the shutdown sequence is logged by `exit`.

**参数**

- **status** — exit status.

**参见**

- java.lang.Runtime#exit(int)
