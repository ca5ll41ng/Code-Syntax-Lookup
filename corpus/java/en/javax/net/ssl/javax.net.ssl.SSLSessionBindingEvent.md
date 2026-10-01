---
id: "java-en-function-javax-net-ssl-sslsessionbindingevent"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLSessionBindingEvent"
title: "SSLSessionBindingEvent"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionBindingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionBindingEvent

This event is propagated to a SSLSessionBindingListener.
 When a listener object is bound or unbound to an SSLSession by
 `putValue`
 or `removeValue`, objects which
 implement the SSLSessionBindingListener will receive an
 event of this type.  The event's name field is the
 key in which the listener is being bound or unbound.

**参见**

- SSLSession
- SSLSessionBindingListener

> *Since 1.4*
