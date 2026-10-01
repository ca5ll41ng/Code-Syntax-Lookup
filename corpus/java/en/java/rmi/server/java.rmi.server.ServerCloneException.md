---
id: "java-en-function-java-rmi-server-servercloneexception"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.ServerCloneException"
title: "ServerCloneException"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ServerCloneException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerCloneException

A `ServerCloneException` is thrown if a remote exception occurs
 during the cloning of a `UnicastRemoteObject`.

 

As of release 1.4, this exception has been retrofitted to conform to
 the general purpose exception-chaining mechanism.  The "nested exception"
 that may be provided at construction time and accessed via the public
 `detail` field is now known as the cause, and may be
 accessed via the `getCause` method, as well as
 the aforementioned "legacy field."

 

Invoking the method `initCause` on an
 instance of `ServerCloneException` always throws `IllegalStateException`.

**参见**

- java.rmi.server.UnicastRemoteObject#clone()

> *Since 1.1*
