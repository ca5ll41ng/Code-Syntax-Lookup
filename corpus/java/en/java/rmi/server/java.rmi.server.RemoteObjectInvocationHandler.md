---
id: "java-en-function-java-rmi-server-remoteobjectinvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RemoteObjectInvocationHandler"
title: "RemoteObjectInvocationHandler"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteObjectInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteObjectInvocationHandler

An implementation of the InvocationHandler interface for
 use with Java Remote Method Invocation (Java RMI).  This invocation
 handler can be used in conjunction with a dynamic proxy instance as a
 replacement for a pregenerated stub class.

 

Applications are not expected to use this class directly.  A remote
 object exported to use a dynamic proxy with `UnicastRemoteObject`
 has an instance of this class as that proxy's invocation handler.

> *Since 1.5*
