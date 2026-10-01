---
id: "java-en-function-javax-naming-spi-dirobjectfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.DirObjectFactory"
title: "DirObjectFactory"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirObjectFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirObjectFactory

This interface represents a factory for creating an object given
 an object and attributes about the object.

 The JNDI framework allows for object implementations to
 be loaded in dynamically via object factories. See
 `ObjectFactory` for details.
 

 A `DirObjectFactory` extends `ObjectFactory` by allowing
 an `Attributes` instance
 to be supplied to the `getObjectInstance()` method.
 `DirObjectFactory` implementations are intended to be used by `DirContext`
 service providers. The service provider, in addition reading an
 object from the directory, might already have attributes that
 are useful for the object factory to check to see whether the
 factory is supposed to process the object. For instance, an LDAP-style
 service provider might have read the "objectclass" of the object.
 A CORBA object factory might be interested only in LDAP entries
 with "objectclass=corbaObject". By using the attributes supplied by
 the LDAP service provider, the CORBA object factory can quickly
 eliminate objects that it need not worry about, and non-CORBA object
 factories can quickly eliminate CORBA-related LDAP entries.

**参见**

- NamingManager#getObjectInstance
- DirectoryManager#getObjectInstance
- ObjectFactory

> *Since 1.3*
