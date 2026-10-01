---
id: "java-en-function-javax-naming-interruptednamingexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.InterruptedNamingException"
title: "InterruptedNamingException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InterruptedNamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterruptedNamingException

This exception is thrown when the naming operation
 being invoked has been interrupted. For example, an application
 might interrupt a thread that is performing a search. If the
 search supports being interrupted, it will throw
 InterruptedNamingException. Whether an operation is interruptible
 and when depends on its implementation (as provided by the
 service providers). Different implementations have different ways
 of protecting their resources and objects from being damaged
 due to unexpected interrupts.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- Context
- javax.naming.directory.DirContext
- java.lang.Thread#interrupt
- java.lang.InterruptedException

> *Since 1.3*
