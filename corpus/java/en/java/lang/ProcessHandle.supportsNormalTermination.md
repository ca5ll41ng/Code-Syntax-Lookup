---
id: "java-en-function-processhandle-supportsnormaltermination"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.supportsNormalTermination"
signature: "boolean supportsNormalTermination()"
title: "ProcessHandle.supportsNormalTermination"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.supportsNormalTermination

```java
boolean supportsNormalTermination()
```

Returns `true` if the implementation of `destroy`
 normally terminates the process.
 Returns `false` if the implementation of `destroy`
 forcibly and immediately terminates the process.

**返回**

- `true` if the implementation of `destroy` normally terminates the process; otherwise, `destroy` forcibly terminates the process
