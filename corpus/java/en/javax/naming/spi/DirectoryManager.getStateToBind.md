---
id: "java-en-function-directorymanager-getstatetobind"
language: "java"
lang: "en"
category: "function"
name: "DirectoryManager.getStateToBind"
signature: "public static DirStateFactory.Result getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws NamingException"
title: "DirectoryManager.getStateToBind"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirectoryManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectoryManager.getStateToBind

```java
public static DirStateFactory.Result getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes attrs) throws NamingException
```

Retrieves the state of an object for binding when given the original
 object and its attributes.
 

 This method is like `NamingManager.getStateToBind` except
 for the following differences:

- It accepts an `Attributes` parameter containing attributes
    that were passed to the `DirContext.bind()` method.

- It returns a non-null `DirStateFactory.Result` instance
    containing the object to be bound, and the attributes to
    accompany the binding. Either the object or the attributes may be null.

- 
 The state factories tried must each implement either
 `StateFactory` or `DirStateFactory`.
 If it implements `DirStateFactory`, then
 `DirStateFactory.getStateToBind()` is called; otherwise,
 `StateFactory.getStateToBind()` is called.

 Service providers that implement the `DirContext` interface
 should use this method, not `NamingManager.getStateToBind()`.

 See NamingManager.getStateToBind() for a description of how
 the list of state factories to be tried is determined.

 The object returned by this method is owned by the caller.
 The implementation will not subsequently modify it.
 It will contain either a new `Attributes` object that is
 likewise owned by the caller, or a reference to the original
 `attrs` parameter.

**参数**

- **obj** — The non-null object for which to get state to bind.
- **name** — The name of this object relative to `nameCtx`, or null if no name is specified.
- **nameCtx** — The context relative to which the `name` parameter is specified, or null if `name` is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the state factory and the object's state.
- **attrs** — The possibly null Attributes that is to be bound with the object.

**返回**

- A non-null DirStateFactory.Result containing the object and attributes to be bound. If no state factory returns a non-null answer, the result will contain the object (`obj`) itself with the original attributes.

**异常**

- **NamingException** — If a naming exception was encountered while using the factories. A factory should only throw an exception if it does not want other factories to be used in an attempt to create an object. See `DirStateFactory.getStateToBind()`.

**参见**

- DirStateFactory
- DirStateFactory#getStateToBind
- NamingManager#getStateToBind

> *Since 1.3*
