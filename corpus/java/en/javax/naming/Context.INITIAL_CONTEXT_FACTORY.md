---
id: "java-en-function-context-initial_context_factory"
language: "java"
lang: "en"
category: "function"
name: "Context.INITIAL_CONTEXT_FACTORY"
signature: "String INITIAL_CONTEXT_FACTORY = \"java.naming.factory.initial\""
title: "Context.INITIAL_CONTEXT_FACTORY"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.INITIAL_CONTEXT_FACTORY

```java
String INITIAL_CONTEXT_FACTORY = "java.naming.factory.initial"
```

Constant that holds the name of the environment property
 for specifying the initial context factory to use. The value
 of the property should be the fully qualified class name
 of the factory class that will create an initial context.
 This property may be specified in the environment parameter
 passed to the initial context constructor,
 a system property, or an application resource file.
 If it is not specified in any of these sources,
 `NoInitialContextException` is thrown when an initial
 context is required to complete an operation.

 

 The value of this constant is "java.naming.factory.initial".

**参见**

- InitialContext
- javax.naming.directory.InitialDirContext
- javax.naming.spi.NamingManager#getInitialContext
- javax.naming.spi.InitialContextFactory
- NoInitialContextException
- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
