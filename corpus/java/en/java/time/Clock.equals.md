---
id: "java-en-function-clock-equals"
language: "java"
lang: "en"
category: "function"
name: "Clock.equals"
signature: "public boolean equals(Object obj)"
title: "Clock.equals"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.equals

```java
public boolean equals(Object obj)
```

Checks if this clock is equal to another clock.
 

 Clocks should override this method to compare equals based on
 their state and to meet the contract of `equals`.
 If not overridden, the behavior is defined by `equals`

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other clock
