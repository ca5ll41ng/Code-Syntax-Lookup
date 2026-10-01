---
id: "java-en-function-java-rmi-servererror"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.ServerError"
title: "ServerError"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/ServerError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerError

A ServerError is thrown as a result of a remote method
 invocation when an Error is thrown while processing
 the invocation on the server, either while unmarshalling the arguments,
 executing the remote method itself, or marshalling the return value.

 A ServerError instance contains the original
 Error that occurred as its cause.

> *Since 1.1*
