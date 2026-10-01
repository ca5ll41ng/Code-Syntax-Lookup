---
id: "java-en-function-java-rmi-nosuchobjectexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.NoSuchObjectException"
title: "NoSuchObjectException"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/NoSuchObjectException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NoSuchObjectException

A NoSuchObjectException is thrown if an attempt is made to
 invoke a method on an object that no longer exists in the remote virtual
 machine.  If a NoSuchObjectException occurs attempting to
 invoke a method on a remote object, the call may be retransmitted and still
 preserve RMI's "at most once" call semantics.

 A NoSuchObjectException is also thrown by the method
 java.rmi.server.RemoteObject.toStub and by the
 unexportObject methods of
 java.rmi.server.UnicastRemoteObject.

**参见**

- java.rmi.server.RemoteObject#toStub(Remote)
- java.rmi.server.UnicastRemoteObject#unexportObject(Remote,boolean)

> *Since 1.1*
