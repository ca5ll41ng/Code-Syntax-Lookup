---
id: "java-en-function-clock-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Clock.hashCode"
signature: "public int hashCode()"
title: "Clock.hashCode"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.hashCode

```java
public int hashCode()
```

A hash code for this clock.
 

 Clocks should override this method based on
 their state and to meet the contract of `hashCode`.
 If not overridden, the behavior is defined by `hashCode`

**返回**

- a suitable hash code
