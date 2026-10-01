---
id: "java-en-function-executable-getparameters"
language: "java"
lang: "en"
category: "function"
name: "Executable.getParameters"
signature: "public Parameter[] getParameters()"
title: "Executable.getParameters"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getParameters

```java
public Parameter[] getParameters()
```

{@return an array of `Parameter` objects representing
 all the parameters to the underlying executable represented by
 this object} An array of length 0 is returned if the executable
 has no parameters.

 

The parameters of the underlying executable do not necessarily
 have unique names, or names that are legal identifiers in the
 Java programming language (JLS {@jls 3.8}).

**异常**

- **MalformedParametersException** — if the class file contains a MethodParameters attribute that is improperly formatted.
