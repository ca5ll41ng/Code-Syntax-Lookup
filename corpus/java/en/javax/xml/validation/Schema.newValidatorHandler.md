---
id: "java-en-function-schema-newvalidatorhandler"
language: "java"
lang: "en"
category: "function"
name: "Schema.newValidatorHandler"
signature: "public abstract ValidatorHandler newValidatorHandler()"
title: "Schema.newValidatorHandler"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Schema.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Schema.newValidatorHandler

```java
public abstract ValidatorHandler newValidatorHandler()
```

Creates a new `ValidatorHandler` for this `Schema`.

 

Implementors should assure that the properties set on the
 `SchemaFactory` that created this `Schema` are also
 set on the `ValidatorHandler` constructed.

**返回**

- Always return a non-null valid object.
