---
id: "java-en-function-java-rmi-remoteexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.RemoteException"
title: "RemoteException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/RemoteException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteException

A `RemoteException` is the common superclass for a number of
 communication-related exceptions that may occur during the execution of a
 remote method call.  Each method of a remote interface, an interface that
 extends `java.rmi.Remote`, must list
 `RemoteException` in its throws clause.

 

As of release 1.4, this exception has been retrofitted to conform to
 the general purpose exception-chaining mechanism.  The "wrapped remote
 exception" that may be provided at construction time and accessed via
 the public `detail` field is now known as the cause, and
 may be accessed via the `getCause` method, as well as
 the aforementioned "legacy field."

 

Invoking the method `initCause` on an
 instance of `RemoteException` always throws `IllegalStateException`.

> *Since 1.1*
