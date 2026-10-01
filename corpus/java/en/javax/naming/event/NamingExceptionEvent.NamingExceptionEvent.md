---
id: "java-en-function-namingexceptionevent-namingexceptionevent"
language: "java"
lang: "en"
category: "function"
name: "NamingExceptionEvent.NamingExceptionEvent"
signature: "public NamingExceptionEvent(EventContext source, NamingException exc)"
title: "NamingExceptionEvent.NamingExceptionEvent"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingExceptionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingExceptionEvent.NamingExceptionEvent

```java
public NamingExceptionEvent(EventContext source, NamingException exc)
```

Constructs an instance of `NamingExceptionEvent` using
 the context in which the `NamingException` was thrown and the exception
 that was thrown.

**参数**

- **source** — The non-null context in which the exception was thrown.
- **exc** — The non-null `NamingException` that was thrown.
