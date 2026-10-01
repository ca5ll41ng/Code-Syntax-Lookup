---
id: "java-en-function-javax-net-ssl-sslserversocket"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLServerSocket"
title: "SSLServerSocket"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket

This class extends ServerSocket and
 provides secure server sockets using protocols such as the Secure
 Sockets Layer (SSL) or Transport Layer Security (TLS) protocols.
 

 Instances of this class are generally created using an
 SSLServerSocketFactory.  The primary function
 of an SSLServerSocket
 is to create SSLSockets by accepting
 connections.
 

 An SSLServerSocket contains several pieces of state data
 which are inherited by the SSLSocket at
 socket creation.  These include the enabled cipher
 suites and protocols, whether client
 authentication is necessary, and whether created sockets should
 begin handshaking in client or server mode.  The state
 inherited by the created SSLSocket can be
 overridden by calling the appropriate methods.

**参见**

- java.net.ServerSocket
- SSLSocket

> *Since 1.4*
