---
id: "java-en-function-javax-naming-spi-statefactory"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.StateFactory"
title: "StateFactory"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/StateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StateFactory

This interface represents a factory for obtaining the state of an
 object for binding.

 The JNDI framework allows for object implementations to
 be loaded in dynamically via object factories.
 For example, when looking up a printer bound in the name space,
 if the print service binds printer names to `Reference`s, the printer
 `Reference` could be used to create a printer object, so that
 the caller of lookup can directly operate on the printer object
 after the lookup.
 

An `ObjectFactory` is responsible
 for creating objects of a specific type.  In the above example,
 you may have a `PrinterObjectFactory` for creating
 `Printer` objects.
 

 For the reverse process, when an object is bound into the namespace,
 JNDI provides state factories.
 Continuing with the printer example, suppose the printer object is
 updated and rebound:
 
```

 ctx.rebind("inky", printer);
 
```

 The service provider for `ctx` uses a state factory
 to obtain the state of `printer` for binding into its namespace.
 A state factory for the `Printer` type object might return
 a more compact object for storage in the naming system.

 A state factory must implement the `StateFactory` interface.
 In addition, the factory class must be public and must have a
 public constructor that accepts no parameters.
 Note that in cases where the factory is in a named module then it must be
 in a package which is exported by that module to the `java.naming`
 module.

 The `getStateToBind()` method of a state factory may
 be invoked multiple times, possibly using different parameters.
 The implementation is thread-safe.

 `StateFactory` is intended for use with service providers
 that implement only the `Context` interface.
 `DirStateFactory` is intended for use with service providers
 that implement the `DirContext` interface.

**参见**

- NamingManager#getStateToBind
- DirectoryManager#getStateToBind
- ObjectFactory
- DirStateFactory

> *Since 1.3*
