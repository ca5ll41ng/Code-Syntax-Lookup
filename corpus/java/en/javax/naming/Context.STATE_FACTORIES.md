---
id: "java-en-function-context-state_factories"
language: "java"
lang: "en"
category: "function"
name: "Context.STATE_FACTORIES"
signature: "String STATE_FACTORIES = \"java.naming.factory.state\""
title: "Context.STATE_FACTORIES"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.STATE_FACTORIES

```java
String STATE_FACTORIES = "java.naming.factory.state"
```

Constant that holds the name of the environment property
 for specifying the list of state factories to use. The value
 of the property should be a colon-separated list of the fully
 qualified class names of state factory classes that will be used
 to get an object's state given the object itself.
 This property may be specified in the environment, a system property,
 or one or more resource files.

 

 The value of this constant is "java.naming.factory.state".

**参见**

- javax.naming.spi.NamingManager#getStateToBind
- javax.naming.spi.StateFactory
- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)

> *Since 1.3*
