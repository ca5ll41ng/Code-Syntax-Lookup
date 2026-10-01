---
id: "java-en-function-java-rmi-server-rmiserversocketfactory"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RMIServerSocketFactory"
title: "RMIServerSocketFactory"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIServerSocketFactory

An RMIServerSocketFactory instance is used by the RMI runtime
 in order to obtain server sockets for RMI calls.  A remote object can be
 associated with an RMIServerSocketFactory when it is
 created/exported via the constructors or exportObject methods
 of java.rmi.server.UnicastRemoteObject.

 

An RMIServerSocketFactory instance associated with a remote
 object is used to obtain the ServerSocket used to accept
 incoming calls from clients.

 

An RMIServerSocketFactory instance can also be associated
 with a remote object registry so that clients can use custom socket
 communication with a remote object registry.

 

An implementation of this interface
 should implement `equals` to return true when
 passed an instance that represents the same (functionally equivalent)
 server socket factory, and false otherwise (and it should also
 implement `hashCode` consistently with its
 Object.equals implementation).

**参见**

- java.rmi.server.UnicastRemoteObject
- java.rmi.registry.LocateRegistry

> *Since 1.2*
