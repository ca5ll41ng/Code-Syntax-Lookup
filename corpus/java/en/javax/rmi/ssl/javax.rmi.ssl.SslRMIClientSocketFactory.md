---
id: "java-en-function-javax-rmi-ssl-sslrmiclientsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.rmi.ssl.SslRMIClientSocketFactory"
title: "SslRMIClientSocketFactory"
directive: "type"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIClientSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIClientSocketFactory

An SslRMIClientSocketFactory instance is used by the RMI
 runtime in order to obtain client sockets for RMI calls via SSL.

 

This class implements RMIClientSocketFactory over
 the Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
 protocols.

 

This class creates SSL sockets using the default
 SSLSocketFactory (see `getDefault`).  All instances of this class are
 functionally equivalent.  In particular, they all share the same
 truststore, and the same keystore when client authentication is
 required by the server.  This behavior can be modified in
 subclasses by overriding the `createSocket`
 method; in that case, `equals(Object) equals` and `hashCode() hashCode` may also need to be overridden.

 

If the system property
 {@systemProperty javax.rmi.ssl.client.enabledCipherSuites} is specified,
 the `createSocket` method will call `setEnabledCipherSuites` before returning the
 socket.  The value of this system property is a string that is a
 comma-separated list of SSL/TLS cipher suites to enable.

 

If the system property
 {@systemProperty javax.rmi.ssl.client.enabledProtocols} is specified,
 the `createSocket` method will call `setEnabledProtocols` before returning the
 socket.  The value of this system property is a string that is a
 comma-separated list of SSL/TLS protocol versions to enable.

**参见**

- javax.net.ssl.SSLSocketFactory
- javax.rmi.ssl.SslRMIServerSocketFactory

> *Since 1.5*
