---
id: "java-en-function-namingmanager-getobjectinstance"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.getObjectInstance"
signature: "public static Object getObjectInstance(Object refInfo, Name name, Context nameCtx, Hashtable<?,?> environment) throws Exception"
title: "NamingManager.getObjectInstance"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.getObjectInstance

```java
public static Object getObjectInstance(Object refInfo, Name name, Context nameCtx, Hashtable<?,?> environment) throws Exception
```

Creates an instance of an object for the specified object
 and environment.
 

 If an object factory builder has been installed, it is used to
 create a factory for creating the object.
 Otherwise, the following rules are used to create the object:

 
- If `refInfo` is a `Reference`
    or `Referenceable` containing a factory class name,
    use the named factory to create the object.
    Return `refInfo` if the factory cannot be created.
    Downloading a factory class from a location specified in the reference
    can be supported by a custom implementation of `ObjectFactoryBuilder`.
    The `getFactoryClassLocation() factory class
    location`, if present, is ignored. A custom `ObjectFactoryBuilder`
    `setObjectFactoryBuilder(ObjectFactoryBuilder) may be used`
    if a different policy is desired.
    If an exception is encountered while creating the factory,
    it is passed up to the caller.
 
- If `refInfo` is a `Reference` or
    `Referenceable` with no factory class name,
    and the address or addresses are `StringRefAddr`s with
    address type "URL",
    try the URL context factory corresponding to each URL's scheme id
    to create the object (see `getURLContext()`).
    If that fails, continue to the next step.
 
-  Use the object factories specified in
    the `Context.OBJECT_FACTORIES` property of the environment,
    and of the provider resource file associated with
    `nameCtx`, in that order.
    The value of this property is a colon-separated list of factory
    class names that are tried in order, and the first one that succeeds
    in creating an object is the one used.
    If none of the factories can be loaded,
    return `refInfo`.
    If an exception is encountered while creating the object, the
    exception is passed up to the caller.

 Service providers that implement the `DirContext`
 interface should use
 `DirectoryManager.getObjectInstance()`, not this method.
 Service providers that implement only the `Context`
 interface should use this method.
 

 Note that an object factory (an object that implements the ObjectFactory
 interface) must be public and must have a public constructor that
 accepts no arguments.
 In cases where the factory is in a named module then it must be in a
 package which is exported by that module to the `java.naming`
 module.
 

 The `name` and `nameCtx` parameters may
 optionally be used to specify the name of the object being created.
 `name` is the name of the object, relative to context
 `nameCtx`.  This information could be useful to the object
 factory or to the object implementation.
  If there are several possible contexts from which the object
  could be named -- as will often be the case -- it is up to
  the caller to select one.  A good rule of thumb is to select the
 "deepest" context available.
 If `nameCtx` is null, `name` is relative
 to the default initial context.  If no name is being specified, the
 `name` parameter should be null.

**参数**

- **refInfo** — The possibly null object for which to create an object.
- **name** — The name of this object relative to `nameCtx`. Specifying a name is optional; if it is omitted, `name` should be null.
- **nameCtx** — The context relative to which the `name` parameter is specified.  If null, `name` is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the object factory and the object.

**返回**

- An object created using `refInfo`; or `refInfo` if an object cannot be created using the algorithm described above.

**异常**

- **NamingException** — if a naming exception was encountered while attempting to get a URL context, or if one of the factories accessed throws a NamingException.
- **Exception** — if one of the factories accessed throws an exception, or if an error was encountered while loading and instantiating the factory and object classes. A factory should only throw an exception if it does not want other factories to be used in an attempt to create an object. See ObjectFactory.getObjectInstance().

**参见**

- #getURLContext
- ObjectFactory
- ObjectFactory#getObjectInstance
