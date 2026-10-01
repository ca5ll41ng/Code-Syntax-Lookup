---
id: "java-en-function-delayed-getdelay"
language: "java"
lang: "en"
category: "function"
name: "Delayed.getDelay"
signature: "long getDelay(TimeUnit unit)"
title: "Delayed.getDelay"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Delayed.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Delayed.getDelay

```java
long getDelay(TimeUnit unit)
```

Returns the remaining delay associated with this object, in the
 given time unit.

**参数**

- **unit** — the time unit

**返回**

- the remaining delay; zero or negative values indicate that the delay has already elapsed
