---
id: "java-en-function-reference-getfactoryclasslocation"
language: "java"
lang: "en"
category: "function"
name: "Reference.getFactoryClassLocation"
signature: "public String getFactoryClassLocation()"
title: "Reference.getFactoryClassLocation"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.getFactoryClassLocation

```java
public String getFactoryClassLocation()
```

Retrieves the location of the factory of the object
 to which this reference refers.
 If it is a codebase, then it is an ordered list of URLs,
 separated by spaces, listing locations from where the factory
 class definition should be loaded.

**返回**

- The possibly null string containing the location for loading in the factory's class.
