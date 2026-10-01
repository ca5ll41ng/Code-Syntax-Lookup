---
id: "java-en-function-schemafactoryfinder-schemafactoryfinder"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactoryFinder.SchemaFactoryFinder"
signature: "public SchemaFactoryFinder(ClassLoader loader)"
title: "SchemaFactoryFinder.SchemaFactoryFinder"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactoryFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactoryFinder.SchemaFactoryFinder

```java
public SchemaFactoryFinder(ClassLoader loader)
```

Constructor that specifies ClassLoader to use
 to find SchemaFactory.

**参数**

- **loader** — to be used to load resource, `SchemaFactory`, and `SchemaFactoryLoader` implementations during the resolution process. If this parameter is null, the default system class loader will be used.
