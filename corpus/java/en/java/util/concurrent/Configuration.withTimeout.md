---
id: "java-en-function-configuration-withtimeout"
language: "java"
lang: "en"
category: "function"
name: "Configuration.withTimeout"
signature: "Configuration withTimeout(Duration timeout)"
title: "Configuration.withTimeout"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.withTimeout

```java
Configuration withTimeout(Duration timeout)
```

{@return a new `Configuration` object with the given timeout}
 The other components are the same as this object.
 can use `between Duration.between` to
 compute the timeout for this method.

**参数**

- **timeout** — the timeout

**参见**

- #join()
- CancelledByTimeoutException
