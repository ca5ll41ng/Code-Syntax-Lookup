---
id: "java-en-function-schemafactoryfinder-newfactory"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactoryFinder.newFactory"
signature: "public SchemaFactory newFactory(String schemaLanguage)"
title: "SchemaFactoryFinder.newFactory"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactoryFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactoryFinder.newFactory

```java
public SchemaFactory newFactory(String schemaLanguage)
```

Creates a new `SchemaFactory` object for the specified
 schema language.

**参数**

- **schemaLanguage** — See `SchemaFactory Schema Language` table in SchemaFactory for the list of available schema languages.

**返回**

- null if the callee fails to create one.

**异常**

- **NullPointerException** — If the schemaLanguage parameter is null.
- **SchemaFactoryConfigurationError** — If a configuration error is encountered.
