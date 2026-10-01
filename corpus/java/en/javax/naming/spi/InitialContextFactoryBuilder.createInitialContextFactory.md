---
id: "java-en-function-initialcontextfactorybuilder-createinitialcontextfactory"
language: "java"
lang: "en"
category: "function"
name: "InitialContextFactoryBuilder.createInitialContextFactory"
signature: "public InitialContextFactory createInitialContextFactory(Hashtable<?,?> environment) throws NamingException"
title: "InitialContextFactoryBuilder.createInitialContextFactory"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/InitialContextFactoryBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContextFactoryBuilder.createInitialContextFactory

```java
public InitialContextFactory createInitialContextFactory(Hashtable<?,?> environment) throws NamingException
```

Creates an initial context factory using the specified
 environment.

 The environment parameter is owned by the caller.
 The implementation will not modify the object or keep a reference
 to it, although it may keep a reference to a clone or copy.

**参数**

- **environment** — Environment used in creating an initial context implementation. Can be null.

**返回**

- A non-null initial context factory.

**异常**

- **NamingException** — If an initial context factory could not be created.
