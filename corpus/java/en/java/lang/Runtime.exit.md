---
id: "java-en-function-runtime-exit"
language: "java"
lang: "en"
category: "function"
name: "Runtime.exit"
signature: "public void exit(int status)"
title: "Runtime.exit"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.exit

```java
public void exit(int status)
```

Initiates the `#shutdown shutdown sequence` of the Java Virtual Machine.
 This method initiates the shutdown sequence (if it is not already initiated) and
 then blocks indefinitely. This method neither returns nor throws an exception; that
 is, it does not complete either normally or abruptly.

 

 The argument serves as a status code. By convention, a nonzero status code
 indicates abnormal termination.

 

 Successful invocations of this method are serialized such that only one invocation
 initiates the shutdown sequence and terminates the VM with the given status code.
 All other invocations will perform no action and block indefinitely.

 

 Because a successful invocation of this method blocks indefinitely, if it is invoked
 from a shutdown hook, it will prevent that shutdown hook from terminating. Consequently,
 this will prevent the shutdown sequence from finishing.

 

 The `exit(int) System.exit` method is the
 conventional and convenient means of invoking this method.

 If the `getLogger(String) system logger` for `java.lang.Runtime`
 is enabled with logging level `DEBUG Level.DEBUG` the stack trace
 of the call to `Runtime.exit()` is logged.

**参数**

- **status** — Termination status.  By convention, a nonzero status code indicates abnormal termination.

**参见**

- #addShutdownHook
- #removeShutdownHook
- #halt(int)
