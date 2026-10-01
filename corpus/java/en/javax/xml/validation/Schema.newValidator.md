---
id: "java-en-function-schema-newvalidator"
language: "java"
lang: "en"
category: "function"
name: "Schema.newValidator"
signature: "public abstract Validator newValidator()"
title: "Schema.newValidator"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Schema.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Schema.newValidator

```java
public abstract Validator newValidator()
```

Creates a new `Validator` for this `Schema`.

 

A validator enforces/checks the set of constraints this object
 represents.

 

Implementors should assure that the properties set on the
 `SchemaFactory` that created this `Schema` are also
 set on the `Validator` constructed.

**返回**

- Always return a non-null valid object.
