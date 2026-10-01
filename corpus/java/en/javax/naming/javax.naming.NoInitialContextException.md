---
id: "java-en-function-javax-naming-noinitialcontextexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.NoInitialContextException"
title: "NoInitialContextException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NoInitialContextException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NoInitialContextException

This exception is thrown when no initial context implementation
 can be created.  The policy of how an initial context implementation
 is selected is described in the documentation of the InitialContext class.

 This exception can be thrown during any interaction with the
 InitialContext, not only when the InitialContext is constructed.
 For example, the implementation of the initial context might lazily
 retrieve the context only when actual methods are invoked on it.
 The application should not have any dependency on when the existence
 of an initial context is determined.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- InitialContext
- javax.naming.directory.InitialDirContext
- javax.naming.spi.NamingManager#getInitialContext
- javax.naming.spi.NamingManager#setInitialContextFactoryBuilder

> *Since 1.3*
