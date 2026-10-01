---
id: "java-en-function-java-rmi-remote"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.Remote"
title: "Remote"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Remote.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Remote

The Remote interface serves to identify interfaces whose
 methods may be invoked from a non-local virtual machine.  Any object that
 is a remote object must directly or indirectly implement this interface.
 Only those methods specified in a "remote interface", an interface that
 extends java.rmi.Remote are available remotely.

 

Implementation classes can implement any number of remote interfaces and
 can extend other remote implementation classes.  RMI provides a convenience
 class `java.rmi.server.UnicastRemoteObject UnicastRemoteObject`
 that remote object implementations can extend and that facilitates remote
 object creation.

 

For complete details on RMI, see the RMI Specification which
 describes the RMI API and system.

> *Since 1.1*
