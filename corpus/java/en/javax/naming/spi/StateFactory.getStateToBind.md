---
id: "java-en-function-statefactory-getstatetobind"
language: "java"
lang: "en"
category: "function"
name: "StateFactory.getStateToBind"
signature: "public Object getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment) throws NamingException"
title: "StateFactory.getStateToBind"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/StateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StateFactory.getStateToBind

```java
public Object getStateToBind(Object obj, Name name, Context nameCtx, Hashtable<?,?> environment) throws NamingException
```

Retrieves the state of an object for binding.

 `NamingManager.getStateToBind()`
 successively loads in state factories and invokes this method
 on them until one produces a non-null answer.
 `DirectoryManager.getStateToBind()`
 successively loads in state factories.  If a factory implements
 `DirStateFactory`, then `DirectoryManager`
 invokes `DirStateFactory.getStateToBind()`; otherwise
 it invokes `StateFactory.getStateToBind()`.

 When an exception
 is thrown by a factory, the exception is passed on to the caller
 of `NamingManager.getStateToBind()` and
 `DirectoryManager.getStateToBind()`.
 The search for other factories
 that may produce a non-null answer is halted.
 A factory should only throw an exception if it is sure that
 it is the only intended factory and that no other factories
 should be tried.
 If this factory cannot create an object using the arguments supplied,
 it should return null.
 

 The name and nameCtx parameters may
 optionally be used to specify the name of the object being created.
 See the description of "Name and Context Parameters" in
 `getObjectInstance ObjectFactory.getObjectInstance`
 for details.
 If a factory uses nameCtx it should synchronize its use
 against concurrent access, since context implementations are not
 guaranteed to be thread-safe.
 

 The `name` and `environment` parameters
 are owned by the caller.
 The implementation will not modify these objects or keep references
 to them, although it may keep references to clones or copies.

**参数**

- **obj** — A non-null object whose state is to be retrieved.
- **name** — The name of this object relative to nameCtx, or null if no name is specified.
- **nameCtx** — The context relative to which the name parameter is specified, or null if name is relative to the default initial context.
- **environment** — The possibly null environment to be used in the creation of the object's state.

**返回**

- The object's state for binding; null if the factory is not returning any changes.

**异常**

- **NamingException** — if this factory encountered an exception while attempting to get the object's state, and no other factories are to be tried.

**参见**

- NamingManager#getStateToBind
- DirectoryManager#getStateToBind
