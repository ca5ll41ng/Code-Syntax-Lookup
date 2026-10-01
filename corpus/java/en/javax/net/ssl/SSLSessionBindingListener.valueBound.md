---
id: "java-en-function-sslsessionbindinglistener-valuebound"
language: "java"
lang: "en"
category: "function"
name: "SSLSessionBindingListener.valueBound"
signature: "void valueBound(SSLSessionBindingEvent event)"
title: "SSLSessionBindingListener.valueBound"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionBindingListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionBindingListener.valueBound

```java
void valueBound(SSLSessionBindingEvent event)
```

This is called to notify the listener that it is being bound into
 an SSLSession.

**参数**

- **event** — the event identifying the SSLSession into which the listener is being bound.
