---
id: "java-en-function-initialcontextfactory-getinitialcontext"
language: "java"
lang: "en"
category: "function"
name: "InitialContextFactory.getInitialContext"
signature: "public Context getInitialContext(Hashtable<?,?> environment) throws NamingException"
title: "InitialContextFactory.getInitialContext"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/InitialContextFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContextFactory.getInitialContext

```java
public Context getInitialContext(Hashtable<?,?> environment) throws NamingException
```

Creates an Initial Context for beginning name resolution.
 Special requirements of this context are supplied
 using environment.

 The environment parameter is owned by the caller.
 The implementation will not modify the object or keep a reference
 to it, although it may keep a reference to a clone or copy.

**参数**

- **environment** — The possibly null environment specifying information to be used in the creation of the initial context.

**返回**

- A non-null initial context object that implements the Context interface.

**异常**

- **NamingException** — If cannot create an initial context.
