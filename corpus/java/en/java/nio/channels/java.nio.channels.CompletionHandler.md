---
id: "java-en-function-java-nio-channels-completionhandler"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.CompletionHandler"
title: "CompletionHandler"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/CompletionHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionHandler

A handler for consuming the result of an asynchronous I/O operation.

 

 The asynchronous channels defined in this package allow a completion
 handler to be specified to consume the result of an asynchronous operation.
 The `completed completed` method is invoked when the I/O operation
 completes successfully. The `failed failed` method is invoked if the
 I/O operations fails. The implementations of these methods should complete
 in a timely manner so as to avoid keeping the invoking thread from dispatching
 to other completion handlers.

**参数**

- **The** — result type of the I/O operation
- **The** — type of the object attached to the I/O operation

> *Since 1.7*
