---
id: "java-en-function-parameter-getname"
language: "java"
lang: "en"
category: "function"
name: "Parameter.getName"
signature: "public String getName()"
title: "Parameter.getName"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Parameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Parameter.getName

```java
public String getName()
```

Returns the name of the parameter.  If the parameter's name is
 `isNamePresent() present`, then this method returns
 the name provided by the class file. Otherwise, this method
 synthesizes a name of the form argN, where N is the index of
 the parameter in the descriptor of the method which declares
 the parameter.

**返回**

- The name of the parameter, either provided by the class file or synthesized if the class file does not provide a name.
