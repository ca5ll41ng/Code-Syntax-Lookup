---
id: "java-en-function-directorymanager-getobjectinstance"
language: "java"
lang: "en"
category: "function"
name: "DirectoryManager.getObjectInstance"
signature: "public static Object getObjectInstance(Object refInfo, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws Exception"
title: "DirectoryManager.getObjectInstance"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirectoryManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectoryManager.getObjectInstance

```java
public static Object getObjectInstance(Object refInfo, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws Exception
```

Creates an instance of an object for the specified object,
 attributes, and environment.
 

 This method is the same as `NamingManager.getObjectInstance`
 except for the following differences:

- 
 It accepts an `Attributes` parameter that contains attributes
 associated with the object. The `DirObjectFactory` might use these
 attributes to save having to look them up from the directory.

- 
 The object factories tried must implement either
 `ObjectFactory` or `DirObjectFactory`.
 If it implements `DirObjectFactory`,
 `DirObjectFactory.getObjectInstance()` is used, otherwise,
 `ObjectFactory.getObjectInstance()` is used.

 Service providers that implement the `DirContext` interface
 should use this method, not `NamingManager.getObjectInstance()`.

**参数**

- **refInfo** — The possibly null object for which to create an object.
- **name** — The name of this object relative to `nameCtx`. Specifying a name is optional; if it is omitted, `name` should be null.
- **nameCtx** — The context relative to which the `name` parameter is specified.  If null, `name` is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the object factory and the object.
- **attrs** — The possibly null attributes associated with refInfo. This might not be the complete set of attributes for refInfo; you might be able to read more attributes from the directory.

**返回**

- An object created using `refInfo` and `attrs`; or `refInfo` if an object cannot be created by a factory.

**异常**

- **NamingException** — If a naming exception was encountered while attempting to get a URL context, or if one of the factories accessed throws a NamingException.
- **Exception** — If one of the factories accessed throws an exception, or if an error was encountered while loading and instantiating the factory and object classes. A factory should only throw an exception if it does not want other factories to be used in an attempt to create an object. See `DirObjectFactory.getObjectInstance()`.

**参见**

- NamingManager#getURLContext
- DirObjectFactory
- DirObjectFactory#getObjectInstance

> *Since 1.3*
