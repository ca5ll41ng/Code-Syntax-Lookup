---
id: "java-en-function-javax-naming-partialresultexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.PartialResultException"
title: "PartialResultException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/PartialResultException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PartialResultException

This exception is thrown to indicate that the result being returned
 or returned so far is partial, and that the operation cannot
 be completed.  For example, when listing a context, this exception
 indicates that returned results only represents some of the bindings
 in the context.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
