---
id: "java-en-function-java-rmi-serverexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.ServerException"
title: "ServerException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/ServerException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerException

A ServerException is thrown as a result of a remote method
 invocation when a RemoteException is thrown while processing
 the invocation on the server, either while unmarshalling the arguments or
 executing the remote method itself.

 A ServerException instance contains the original
 RemoteException that occurred as its cause.

> *Since 1.1*
