---
id: "java-en-function-doubleaccumulator-getthenreset"
language: "java"
lang: "en"
category: "function"
name: "DoubleAccumulator.getThenReset"
signature: "public double getThenReset()"
title: "DoubleAccumulator.getThenReset"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/DoubleAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleAccumulator.getThenReset

```java
public double getThenReset()
```

Equivalent in effect to `get` followed by `reset`. This method may apply for example during quiescent
 points between multithreaded computations.  If there are
 updates concurrent with this method, the returned value is
 not guaranteed to be the final value occurring before
 the reset.

**返回**

- the value before reset
