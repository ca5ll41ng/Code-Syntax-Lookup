---
id: "java-en-function-javax-naming-insufficientresourcesexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.InsufficientResourcesException"
title: "InsufficientResourcesException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InsufficientResourcesException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InsufficientResourcesException

This exception is thrown when resources are not available to complete
 the requested operation. This might due to a lack of resources on
 the server or on the client. There are no restrictions to resource types,
 as different services might make use of different resources. Such
 restrictions might be due to physical limits and/or administrative quotas.
 Examples of limited resources are internal buffers, memory, network bandwidth.

 InsufficientResourcesException is different from LimitExceededException in that
 the latter is due to user/system specified limits. See LimitExceededException
 for details.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
