---
id: "java-en-function-dirstatefactory-getstatetobind"
language: "java"
lang: "en"
category: "function"
name: "DirStateFactory.getStateToBind"
signature: "public Result getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes inAttrs) throws NamingException"
title: "DirStateFactory.getStateToBind"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirStateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirStateFactory.getStateToBind

```java
public Result getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment, Attributes inAttrs) throws NamingException
```

Retrieves the state of an object for binding given the object and attributes
 to be transformed.

 `DirectoryManager.getStateToBind()`
 successively loads in state factories. If a factory implements
 `DirStateFactory`, `DirectoryManager` invokes this method;
 otherwise, it invokes `StateFactory.getStateToBind()`.
 It does this until a factory produces a non-null answer.

 When an exception is thrown by a factory,
 the exception is passed on to the caller
 of `DirectoryManager.getStateToBind()`. The search for other factories
 that may produce a non-null answer is halted.
 A factory should only throw an exception if it is sure that
 it is the only intended factory and that no other factories
 should be tried.
 If this factory cannot create an object using the arguments supplied,
 it should return null.
 

 The `name` and `nameCtx` parameters may
 optionally be used to specify the name of the object being created.
 See the description of "Name and Context Parameters" in
 `getObjectInstance ObjectFactory.getObjectInstance`
 for details.
 If a factory uses `nameCtx` it should synchronize its use
 against concurrent access, since context implementations are not
 guaranteed to be thread-safe.

 The `name`, `inAttrs`, and `environment` parameters
 are owned by the caller.
 The implementation will not modify these objects or keep references
 to them, although it may keep references to clones or copies.
 The object returned by this method is owned by the caller.
 The implementation will not subsequently modify it.
 It will contain either a new `Attributes` object that is
 likewise owned by the caller, or a reference to the original
 `inAttrs` parameter.

**参数**

- **obj** — A possibly null object whose state is to be retrieved.
- **name** — The name of this object relative to `nameCtx`, or null if no name is specified.
- **nameCtx** — The context relative to which the `name` parameter is specified, or null if `name` is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the object's state.
- **inAttrs** — The possibly null attributes to be bound with the object. The factory must not modify `inAttrs`.

**返回**

- A `Result` containing the object's state for binding and the corresponding attributes to be bound; null if the object don't use this factory.

**异常**

- **NamingException** — If this factory encountered an exception while attempting to get the object's state, and no other factories are to be tried.

**参见**

- DirectoryManager#getStateToBind
