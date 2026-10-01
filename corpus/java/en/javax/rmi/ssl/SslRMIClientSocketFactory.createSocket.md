---
id: "java-en-function-sslrmiclientsocketfactory-createsocket"
language: "java"
lang: "en"
category: "function"
name: "SslRMIClientSocketFactory.createSocket"
signature: "public Socket createSocket(String host, int port) throws IOException"
title: "SslRMIClientSocketFactory.createSocket"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIClientSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIClientSocketFactory.createSocket

```java
public Socket createSocket(String host, int port) throws IOException
```

Creates an SSL socket.

 

If the system property
 {@systemProperty javax.rmi.ssl.client.enabledCipherSuites} is
 specified, this method will call `setEnabledCipherSuites` before returning
 the socket. The value of this system property is a string that
 is a comma-separated list of SSL/TLS cipher suites to
 enable.

 

If the system property
 {@systemProperty javax.rmi.ssl.client.enabledProtocols} is
 specified, this method will call `setEnabledProtocols` before returning the
 socket. The value of this system property is a string that is a
 comma-separated list of SSL/TLS protocol versions to
 enable.
