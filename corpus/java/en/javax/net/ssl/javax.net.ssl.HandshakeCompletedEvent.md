---
id: "java-en-function-javax-net-ssl-handshakecompletedevent"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.HandshakeCompletedEvent"
title: "HandshakeCompletedEvent"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent

This event indicates that an SSL handshake completed on a given
 SSL connection.  All the core information about that handshake's
 result is captured through an "SSLSession" object.  As a convenience,
 this event class provides direct access to some important session
 attributes.

 

 The source of this event is the SSLSocket on which handshaking
 just completed.

**参见**

- SSLSocket
- HandshakeCompletedListener
- SSLSession

> *Since 1.4*
