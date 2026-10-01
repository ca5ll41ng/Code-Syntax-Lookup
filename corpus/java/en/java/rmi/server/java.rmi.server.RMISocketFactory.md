---
id: "java-en-function-java-rmi-server-rmisocketfactory"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RMISocketFactory"
title: "RMISocketFactory"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory

An RMISocketFactory instance is used by the RMI runtime
 in order to obtain client and server sockets for RMI calls.  An
 application may use the setSocketFactory method to
 request that the RMI runtime use its socket factory instance
 instead of the default implementation.

 

The default socket factory implementation creates a direct
 socket connection to the remote host.

 

The default socket factory implementation creates server sockets that
 are bound to the wildcard address, which accepts requests from all network
 interfaces.

 

You can use the `RMISocketFactory` class to create a server socket that
 is bound to a specific address, restricting the origin of requests. For example,
 the following code implements a socket factory that binds server sockets to an IPv4
 loopback address. This restricts RMI to processing requests only from the local host.

 
```
`class LoopbackSocketFactory extends RMISocketFactory {
         public ServerSocket createServerSocket(int port) throws IOException {
             return new ServerSocket(port, 5, InetAddress.getByName("127.0.0.1"));
         `

         public Socket createSocket(String host, int port) throws IOException {
             // just call the default client socket factory
             return RMISocketFactory.getDefaultSocketFactory()
                                    .createSocket(host, port);
         }
     }

     // ...

     RMISocketFactory.setSocketFactory(new LoopbackSocketFactory());
 }
```

 Set the {@systemProperty java.rmi.server.hostname} system property
 to `127.0.0.1` to ensure that the generated stubs connect to the right
 network interface.

> *Since 1.1*
