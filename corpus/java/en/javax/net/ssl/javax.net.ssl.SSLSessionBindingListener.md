---
id: "java-en-function-javax-net-ssl-sslsessionbindinglistener"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLSessionBindingListener"
title: "SSLSessionBindingListener"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionBindingListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionBindingListener

This interface is implemented by objects which want to know when
 they are being bound or unbound from a SSLSession.  When either event
 occurs via `putValue`
 or `removeValue`, the event is communicated
 through a SSLSessionBindingEvent identifying the session.

**参见**

- SSLSession
- SSLSessionBindingEvent

> *Since 1.4*
