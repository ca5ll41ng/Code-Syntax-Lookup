---
id: "java-en-function-eventcontext-targetmustexist"
language: "java"
lang: "en"
category: "function"
name: "EventContext.targetMustExist"
signature: "boolean targetMustExist() throws NamingException"
title: "EventContext.targetMustExist"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/EventContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventContext.targetMustExist

```java
boolean targetMustExist() throws NamingException
```

Determines whether a listener can register interest in a target
 that does not exist.

**返回**

- true if the target must exist; false if the target need not exist.

**异常**

- **NamingException** — If the context's behavior in this regard cannot be determined.
