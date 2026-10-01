---
id: "java-en-function-javax-rmi-ssl-sslrmiserversocketfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.rmi.ssl.SslRMIServerSocketFactory"
title: "SslRMIServerSocketFactory"
directive: "type"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIServerSocketFactory

An SslRMIServerSocketFactory instance is used by the RMI
 runtime in order to obtain server sockets for RMI calls via SSL.

 

This class implements RMIServerSocketFactory over
 the Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
 protocols.

 

This class creates SSL sockets using the default
 SSLSocketFactory (see `getDefault`) or the default
 SSLServerSocketFactory (see `getDefault`) unless the
 constructor taking an SSLContext is
 used in which case the SSL sockets are created using
 the SSLSocketFactory returned by
 `getSocketFactory` or the
 SSLServerSocketFactory returned by
 `getServerSocketFactory`.

 When an SSLContext is not supplied all the instances of this
 class share the same keystore, and the same truststore (when client
 authentication is required by the server). This behavior can be modified
 by supplying an already initialized SSLContext instance.

**参见**

- javax.net.ssl.SSLSocketFactory
- javax.net.ssl.SSLServerSocketFactory
- javax.rmi.ssl.SslRMIClientSocketFactory

> *Since 1.5*
