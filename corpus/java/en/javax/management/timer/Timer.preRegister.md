---
id: "java-en-function-timer-preregister"
language: "java"
lang: "en"
category: "function"
name: "Timer.preRegister"
signature: "public ObjectName preRegister(MBeanServer server, ObjectName name) throws java.lang.Exception"
title: "Timer.preRegister"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.preRegister

```java
public ObjectName preRegister(MBeanServer server, ObjectName name) throws java.lang.Exception
```

Allows the timer MBean to perform any operations it needs before being registered
 in the MBean server.
 

 Not used in this context.

**参数**

- **server** — The MBean server in which the timer MBean will be registered.
- **name** — The object name of the timer MBean.

**返回**

- The name of the timer MBean registered.

**异常**

- **java.lang.Exception** — if something goes wrong
