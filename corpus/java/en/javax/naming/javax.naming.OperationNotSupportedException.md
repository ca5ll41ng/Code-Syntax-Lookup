---
id: "java-en-function-javax-naming-operationnotsupportedexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.OperationNotSupportedException"
title: "OperationNotSupportedException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/OperationNotSupportedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperationNotSupportedException

This exception is thrown when a context implementation does not support
 the operation being invoked.
 For example, if a server does not support the Context.bind() method
 it would throw OperationNotSupportedException when the bind() method
 is invoked on it.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
