---
id: "java-en-function-sslsessionbindingevent-sslsessionbindingevent"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionBindingEvent.SSLSessionBindingEvent"
signature: "public SSLSessionBindingEvent(SSLSession session, String name)"
title: "SSLSessionBindingEvent.SSLSessionBindingEvent"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionBindingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionBindingEvent.SSLSessionBindingEvent

```java
public SSLSessionBindingEvent(SSLSession session, String name)
```

Constructs a new SSLSessionBindingEvent.

**参数**

- **session** — the SSLSession acting as the source of the event
- **name** — the name to which the object is being bound or unbound

**异常**

- **IllegalArgumentException** — if session is null.
