---
id: "java-en-function-timer-isactive"
language: "java"
lang: "en"
category: "function"
name: "Timer.isActive"
signature: "public boolean isActive()"
title: "Timer.isActive"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.isActive

```java
public boolean isActive()
```

Tests whether the timer MBean is active.
 A timer MBean is marked active when the `start start` method is called.
 It becomes inactive when the `stop stop` method is called.
 
The default value of the active on/off flag is false.

**返回**

- true if the timer MBean is active, false otherwise.
