---
id: "java-en-function-doubleadder-sumthenreset"
language: "java"
lang: "en"
category: "function"
name: "DoubleAdder.sumThenReset"
signature: "public double sumThenReset()"
title: "DoubleAdder.sumThenReset"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/DoubleAdder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleAdder.sumThenReset

```java
public double sumThenReset()
```

Equivalent in effect to `sum` followed by `reset`. This method may apply for example during quiescent
 points between multithreaded computations.  If there are
 updates concurrent with this method, the returned value is
 not guaranteed to be the final value occurring before
 the reset.

**返回**

- the sum
