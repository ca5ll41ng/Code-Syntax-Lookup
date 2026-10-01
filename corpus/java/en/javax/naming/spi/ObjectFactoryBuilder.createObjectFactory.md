---
id: "java-en-function-objectfactorybuilder-createobjectfactory"
language: "java"
lang: "en"
category: "function"
name: "ObjectFactoryBuilder.createObjectFactory"
signature: "public ObjectFactory createObjectFactory(Object obj, Hashtable<?,?> environment) throws NamingException"
title: "ObjectFactoryBuilder.createObjectFactory"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/ObjectFactoryBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectFactoryBuilder.createObjectFactory

```java
public ObjectFactory createObjectFactory(Object obj, Hashtable<?,?> environment) throws NamingException
```

Creates a new object factory using the environment supplied.

 The environment parameter is owned by the caller.
 The implementation will not modify the object or keep a reference
 to it, although it may keep a reference to a clone or copy.

**参数**

- **obj** — The possibly null object for which to create a factory.
- **environment** — Environment to use when creating the factory. Can be null.

**返回**

- A non-null new instance of an ObjectFactory.

**异常**

- **NamingException** — If an object factory cannot be created.
