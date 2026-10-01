---
id: "java-en-function-java-rmi-serverruntimeexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.ServerRuntimeException"
title: "ServerRuntimeException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/ServerRuntimeException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerRuntimeException

From a server executing on JDK&nbsp;1.1, a
 ServerRuntimeException is thrown as a result of a
 remote method invocation when a RuntimeException is
 thrown while processing the invocation on the server, either while
 unmarshalling the arguments, executing the remote method itself, or
 marshalling the return value.

 A ServerRuntimeException instance contains the original
 RuntimeException that occurred as its cause.

 

A ServerRuntimeException is not thrown from servers
 executing on the Java 2 platform v1.2 or later versions.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
