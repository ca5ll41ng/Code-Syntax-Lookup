---
id: "java-en-function-namingmanager-getstatetobind"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.getStateToBind"
signature: "public static Object getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment) throws NamingException"
title: "NamingManager.getStateToBind"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.getStateToBind

```java
public static Object getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment) throws NamingException
```

Retrieves the state of an object for binding.
 

 Service providers that implement the `DirContext` interface
 should use `DirectoryManager.getStateToBind()`, not this method.
 Service providers that implement only the `Context` interface
 should use this method.

 This method uses the specified state factories in
 the `Context.STATE_FACTORIES` property from the environment
 properties, and from the provider resource file associated with
 `nameCtx`, in that order.
    The value of this property is a colon-separated list of factory
    class names that are tried in order, and the first one that succeeds
    in returning the object's state is the one used.
 If no object's state can be retrieved in this way, return the
 object itself.
    If an exception is encountered while retrieving the state, the
    exception is passed up to the caller.
 

 Note that a state factory
 (an object that implements the StateFactory
 interface) must be public and must have a public constructor that
 accepts no arguments.
 In cases where the factory is in a named module then it must be in a
 package which is exported by that module to the `java.naming`
 module.
 

 The `name` and `nameCtx` parameters may
 optionally be used to specify the name of the object being created.
 See the description of "Name and Context Parameters" in
 `getObjectInstance
          ObjectFactory.getObjectInstance`
 for details.
 

 This method may return a `Referenceable` object.  The
 service provider obtaining this object may choose to store it
 directly, or to extract its reference (using
 `Referenceable.getReference()`) and store that instead.

**参数**

- **obj** — The non-null object for which to get state to bind.
- **name** — The name of this object relative to `nameCtx`, or null if no name is specified.
- **nameCtx** — The context relative to which the `name` parameter is specified, or null if `name` is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the state factory and the object's state.

**返回**

- The non-null object representing `obj`'s state for binding.  It could be the object (`obj`) itself.

**异常**

- **NamingException** — If one of the factories accessed throws an exception, or if an error was encountered while loading and instantiating the factory and object classes. A factory should only throw an exception if it does not want other factories to be used in an attempt to create an object. See `StateFactory.getStateToBind()`.

**参见**

- StateFactory
- StateFactory#getStateToBind
- DirectoryManager#getStateToBind

> *Since 1.3*
