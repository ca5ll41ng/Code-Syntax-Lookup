---
id: "java-en-function-context-object_factories"
language: "java"
lang: "en"
category: "function"
name: "Context.OBJECT_FACTORIES"
signature: "String OBJECT_FACTORIES = \"java.naming.factory.object\""
title: "Context.OBJECT_FACTORIES"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.OBJECT_FACTORIES

```java
String OBJECT_FACTORIES = "java.naming.factory.object"
```

Constant that holds the name of the environment property
 for specifying the list of object factories to use. The value
 of the property should be a colon-separated list of the fully
 qualified class names of factory classes that will create an object
 given information about the object.
 This property may be specified in the environment, a system property,
 or one or more resource files.

 

 The value of this constant is "java.naming.factory.object".

**参见**

- javax.naming.spi.NamingManager#getObjectInstance
- javax.naming.spi.ObjectFactory
- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
