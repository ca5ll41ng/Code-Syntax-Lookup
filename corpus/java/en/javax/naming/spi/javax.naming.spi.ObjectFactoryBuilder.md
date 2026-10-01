---
id: "java-en-function-javax-naming-spi-objectfactorybuilder"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.ObjectFactoryBuilder"
title: "ObjectFactoryBuilder"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/ObjectFactoryBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectFactoryBuilder

This interface represents a builder that creates object factories.

 The JNDI framework allows for object implementations to
 be loaded in dynamically via object factories.
 For example, when looking up a printer bound in the name space,
 if the print service binds printer names to References, the printer
 Reference could be used to create a printer object, so that
 the caller of lookup can directly operate on the printer object
 after the lookup.  An ObjectFactory is responsible for creating
 objects of a specific type.  JNDI uses a default policy for using
 and loading object factories.  You can override this default policy
 by calling `NamingManager.setObjectFactoryBuilder()` with an ObjectFactoryBuilder,
 which contains the program-defined way of creating/loading
 object factories.
 Any `ObjectFactoryBuilder` implementation must implement this
 interface that for creating object factories.

**参见**

- ObjectFactory
- NamingManager#getObjectInstance
- NamingManager#setObjectFactoryBuilder

> *Since 1.3*
