---
id: "java-en-function-process-supportsnormaltermination"
language: "java"
lang: "en"
category: "function"
name: "Process.supportsNormalTermination"
signature: "public boolean supportsNormalTermination()"
title: "Process.supportsNormalTermination"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process.supportsNormalTermination

```java
public boolean supportsNormalTermination()
```

Returns `true` if the implementation of `destroy` is to
 normally terminate the process,
 Returns `false` if the implementation of `destroy`
 forcibly and immediately terminates the process.
 

 Invoking this method on `Process` objects returned by
 `start` and `exec` return
 `true` or `false` depending on the platform implementation.

 This implementation throws an instance of
 `java.lang.UnsupportedOperationException` and performs no other action.

**返回**

- `true` if the implementation of `destroy` is to normally terminate the process; otherwise, `destroy` forcibly terminates the process

**异常**

- **UnsupportedOperationException** — if the Process implementation does not support this operation

> *Since 9*
