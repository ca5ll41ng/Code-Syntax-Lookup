---
id: "java-en-function-javax-naming-namingsecurityexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NamingSecurityException"
title: "NamingSecurityException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingSecurityException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingSecurityException

This is the superclass of security-related exceptions
 thrown by operations in the Context and DirContext interfaces.
 The nature of the failure is described by the name of the subclass.

 If the program wants to handle this exception in particular, it
 should catch NamingSecurityException explicitly before attempting to
 catch NamingException. A program might want to do this, for example,
 if it wants to treat security-related exceptions specially from
 other sorts of naming exception.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
