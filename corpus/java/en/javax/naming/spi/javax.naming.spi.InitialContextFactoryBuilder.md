---
id: "java-en-function-javax-naming-spi-initialcontextfactorybuilder"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.InitialContextFactoryBuilder"
title: "InitialContextFactoryBuilder"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/InitialContextFactoryBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContextFactoryBuilder

This interface represents a builder that creates initial context factories.

 The JNDI framework allows for different initial context implementations
 to be specified at runtime.  An initial context is created using
 an initial context factory. A program can install its own builder
 that creates initial context factories, thereby overriding the
 default policies used by the framework, by calling
 NamingManager.setInitialContextFactoryBuilder().
 The InitialContextFactoryBuilder interface must be implemented by
 such a builder.

**参见**

- InitialContextFactory
- NamingManager#getInitialContext
- NamingManager#setInitialContextFactoryBuilder
- NamingManager#hasInitialContextFactoryBuilder
- javax.naming.InitialContext
- javax.naming.directory.InitialDirContext

> *Since 1.3*
