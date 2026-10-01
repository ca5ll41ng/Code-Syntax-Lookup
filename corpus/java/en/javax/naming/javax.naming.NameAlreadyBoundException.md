---
id: "java-en-function-javax-naming-namealreadyboundexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NameAlreadyBoundException"
title: "NameAlreadyBoundException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameAlreadyBoundException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameAlreadyBoundException

This exception is thrown by methods to indicate that
 a binding cannot be added because the name is already bound to
 another object.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- Context#bind
- Context#rebind
- Context#createSubcontext
- javax.naming.directory.DirContext#bind
- javax.naming.directory.DirContext#rebind
- javax.naming.directory.DirContext#createSubcontext

> *Since 1.3*
