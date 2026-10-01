---
id: "java-en-function-toolprovider-description"
language: "java"
lang: "en"
category: "function"
name: "ToolProvider.description"
signature: "default Optional<String> description()"
title: "ToolProvider.description"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ToolProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ToolProvider.description

```java
default Optional<String> description()
```

{@return a short description of the tool, or an empty
 `Optional` if no description is available}

 line in order to allow creating concise overviews like the following:
 
```
`jar
   Create, manipulate, and extract an archive of classes and resources.
 javac
   Read Java declarations and compile them into class files.
 jlink
   Assemble a set of modules (...) into a custom runtime image.
 `
 
```

> *Since 19*
