---
id: "java-en-function-sslsessionbindinglistener-valueunbound"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionBindingListener.valueUnbound"
signature: "void valueUnbound(SSLSessionBindingEvent event)"
title: "SSLSessionBindingListener.valueUnbound"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionBindingListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionBindingListener.valueUnbound

```java
void valueUnbound(SSLSessionBindingEvent event)
```

This is called to notify the listener that it is being unbound
 from a SSLSession.

**参数**

- **event** — the event identifying the SSLSession from which the listener is being unbound.
