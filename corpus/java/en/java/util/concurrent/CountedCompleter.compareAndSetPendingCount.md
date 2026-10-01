---
id: "java-en-function-countedcompleter-compareandsetpendingcount"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.compareAndSetPendingCount"
signature: "public final boolean compareAndSetPendingCount(int expected, int count)"
title: "CountedCompleter.compareAndSetPendingCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.compareAndSetPendingCount

```java
public final boolean compareAndSetPendingCount(int expected, int count)
```

Sets (atomically) the pending count to the given count only if
 it currently holds the given expected value.

**参数**

- **expected** — the expected value
- **count** — the new value

**返回**

- `true` if successful
