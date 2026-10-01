---
id: "java-en-function-javax-net-ssl-handshakecompletedlistener"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.HandshakeCompletedListener"
title: "HandshakeCompletedListener"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedListener

This interface is implemented by any class which wants to receive
 notifications about the completion of an SSL protocol handshake
 on a given SSL connection.

 

 When an SSL handshake completes, new security parameters will
 have been established.  Those parameters always include the security
 keys used to protect messages.  They may also include parameters
 associated with a new session such as authenticated
 peer identity and a new SSL cipher suite.

> *Since 1.4*
