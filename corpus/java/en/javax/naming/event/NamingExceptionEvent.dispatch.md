---
id: "java-en-function-namingexceptionevent-dispatch"
language: "java"
lang: "en"
category: "function"
name: "NamingExceptionEvent.dispatch"
signature: "public void dispatch(NamingListener listener)"
title: "NamingExceptionEvent.dispatch"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingExceptionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingExceptionEvent.dispatch

```java
public void dispatch(NamingListener listener)
```

Invokes the `namingExceptionThrown()` method on
 a listener using this event.

**参数**

- **listener** — The non-null naming listener on which to invoke the method.
