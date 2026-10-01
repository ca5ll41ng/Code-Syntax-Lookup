---
id: "java-en-function-javax-naming-contextnotemptyexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ContextNotEmptyException"
title: "ContextNotEmptyException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ContextNotEmptyException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContextNotEmptyException

This exception is thrown when attempting to destroy a context that
 is not empty.

 If the program wants to handle this exception in particular, it
 should catch ContextNotEmptyException explicitly before attempting to
 catch NamingException. For example, after catching ContextNotEmptyException,
 the program might try to remove the contents of the context before
 reattempting the destroy.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- Context#destroySubcontext

> *Since 1.3*
