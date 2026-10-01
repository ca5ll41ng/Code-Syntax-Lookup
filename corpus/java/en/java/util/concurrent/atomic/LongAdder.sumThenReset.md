---
id: "java-en-function-longadder-sumthenreset"
language: "java"
lang: "en"
category: "function"
name: "LongAdder.sumThenReset"
signature: "public long sumThenReset()"
title: "LongAdder.sumThenReset"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAdder.sumThenReset

```java
public long sumThenReset()
```

Equivalent in effect to `sum` followed by `reset`. This method may apply for example during quiescent
 points between multithreaded computations.  If there are
 updates concurrent with this method, the returned value is
 not guaranteed to be the final value occurring before
 the reset.

**返回**

- the sum
