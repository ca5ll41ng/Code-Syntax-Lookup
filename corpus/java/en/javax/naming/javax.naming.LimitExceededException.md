---
id: "java-en-function-javax-naming-limitexceededexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.LimitExceededException"
title: "LimitExceededException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LimitExceededException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LimitExceededException

This exception is thrown when a method
 terminates abnormally due to a user or system specified limit.
 This is different from a InsufficientResourceException in that
 LimitExceededException is due to a user/system specified limit.
 For example, running out of memory to complete the request would
 be an insufficient resource. The client asking for 10 answers and
 getting back 11 is a size limit exception.

 Examples of these limits include client and server configuration
 limits such as size, time, number of hops, etc.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
