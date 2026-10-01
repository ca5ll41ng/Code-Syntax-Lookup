---
id: "java-en-function-timer-prederegister"
language: "java"
lang: "en"
category: "function"
name: "Timer.preDeregister"
signature: "public void preDeregister() throws java.lang.Exception"
title: "Timer.preDeregister"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.preDeregister

```java
public void preDeregister() throws java.lang.Exception
```

Allows the timer MBean to perform any operations it needs before being unregistered
 by the MBean server.
 

 Stops the timer.

**异常**

- **java.lang.Exception** — if something goes wrong
