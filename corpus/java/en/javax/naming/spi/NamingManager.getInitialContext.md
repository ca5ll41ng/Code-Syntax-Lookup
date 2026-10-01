---
id: "java-en-function-namingmanager-getinitialcontext"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.getInitialContext"
signature: "public static Context getInitialContext(Hashtable<?,?> env) throws NamingException"
title: "NamingManager.getInitialContext"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.getInitialContext

```java
public static Context getInitialContext(Hashtable<?,?> env) throws NamingException
```

Creates an initial context using the specified environment
 properties.
 

 This is done as follows:
 
 
- If an InitialContextFactoryBuilder has been installed,
     it is used to create the factory for creating the initial
     context
 
- Otherwise, the class specified in the
     `Context.INITIAL_CONTEXT_FACTORY` environment property
     is used
     
     
- First, the `java.util.ServiceLoader ServiceLoader`
         mechanism tries to locate an `InitialContextFactory`
         provider using the current thread's context class loader
     
- Failing that, this implementation tries to locate a suitable
         `InitialContextFactory` using a built-in mechanism
         

         (Note that an initial context factory (an object that implements
         the InitialContextFactory interface) must be public and must have
         a public constructor that accepts no arguments.
         In cases where the factory is in a named module then it must
         be in a package which is exported by that module to the
         `java.naming` module.)

**参数**

- **env** — The possibly null environment properties used when creating the context.

**返回**

- A non-null initial context.

**异常**

- **NoInitialContextException** — If the `Context.INITIAL_CONTEXT_FACTORY` property is not found or names a nonexistent class or a class that cannot be instantiated, or if the initial context could not be created for some other reason.
- **NamingException** — If some other naming exception was encountered.

**参见**

- javax.naming.InitialContext
- javax.naming.directory.InitialDirContext
