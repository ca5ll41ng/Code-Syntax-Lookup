---
id: "java-en-function-java-rmi-server-rmifailurehandler"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RMIFailureHandler"
title: "RMIFailureHandler"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIFailureHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIFailureHandler

An `RMIFailureHandler` can be registered via the
 `RMISocketFactory.setFailureHandler` call. The
 `failure` method of the handler is invoked when the RMI
 runtime is unable to create a `ServerSocket` to listen
 for incoming calls. The `failure` method returns a boolean
 indicating whether the runtime should attempt to re-create the
 `ServerSocket`.

> *Since 1.1*
