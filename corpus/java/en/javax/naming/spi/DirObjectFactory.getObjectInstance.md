---
id: "java-en-function-dirobjectfactory-getobjectinstance"
language: "java"
lang: "en"
category: "function"
name: "DirObjectFactory.getObjectInstance"
signature: "public Object getObjectInstance(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws Exception"
title: "DirObjectFactory.getObjectInstance"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirObjectFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirObjectFactory.getObjectInstance

```java
public Object getObjectInstance(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws Exception
```

Creates an object using the location or reference information, and attributes
 specified.
 

 Special requirements of this object are supplied
 using environment.
 An example of such an environment property is user identity
 information.

 `DirectoryManager.getObjectInstance()`
 successively loads in object factories. If it encounters a `DirObjectFactory`,
 it will invoke `DirObjectFactory.getObjectInstance()`;
 otherwise, it invokes
 `ObjectFactory.getObjectInstance()`. It does this until a factory
 produces a non-null answer.
 

 When an exception
 is thrown by an object factory, the exception is passed on to the caller
 of `DirectoryManager.getObjectInstance()`. The search for other factories
 that may produce a non-null answer is halted.
 An object factory should only throw an exception if it is sure that
 it is the only intended factory and that no other object factories
 should be tried.
 If this factory cannot create an object using the arguments supplied,
 it should return null.

Since `DirObjectFactory` extends `ObjectFactory`, it
 effectively
 has two `getObjectInstance()` methods, where one differs from the other by
 the attributes argument. Given a factory that implements `DirObjectFactory`,
 `DirectoryManager.getObjectInstance()` will only
 use the method that accepts the attributes argument, while
 `NamingManager.getObjectInstance()` will only use the one that does not accept
 the attributes argument.

 See `ObjectFactory` for a description URL context factories and other
 properties of object factories that apply equally to `DirObjectFactory`.

 The `name`, `attrs`, and `environment` parameters
 are owned by the caller.
 The implementation will not modify these objects or keep references
 to them, although it may keep references to clones or copies.

**参数**

- **obj** — The possibly null object containing location or reference information that can be used in creating an object.
- **name** — The name of this object relative to nameCtx, or null if no name is specified.
- **nameCtx** — The context relative to which the name parameter is specified, or null if name is relative to the default initial context.
- **environment** — The possibly null environment that is used in creating the object.
- **attrs** — The possibly null attributes containing some of `obj`'s attributes. `attrs` might not necessarily have all of `obj`'s attributes. If the object factory requires more attributes, it needs to get it, either using `obj`, or `name` and `nameCtx`. The factory must not modify attrs.

**返回**

- The object created; null if an object cannot be created.

**异常**

- **Exception** — If this object factory encountered an exception while attempting to create an object, and no other object factories are to be tried.

**参见**

- DirectoryManager#getObjectInstance
- NamingManager#getURLContext
