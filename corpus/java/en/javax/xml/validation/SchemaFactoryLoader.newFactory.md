---
id: "java-en-function-schemafactoryloader-newfactory"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactoryLoader.newFactory"
signature: "public abstract SchemaFactory newFactory(String schemaLanguage)"
title: "SchemaFactoryLoader.newFactory"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactoryLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactoryLoader.newFactory

```java
public abstract SchemaFactory newFactory(String schemaLanguage)
```

Creates a new `SchemaFactory` object for the specified
 schema language.

**参数**

- **schemaLanguage** — See the list of available schema languages.

**返回**

- null if the callee fails to create one.

**异常**

- **NullPointerException** — If the schemaLanguage parameter is null.
