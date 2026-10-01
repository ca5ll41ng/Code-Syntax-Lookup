---
id: "java-en-function-schemafactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.newInstance"
signature: "public static SchemaFactory newInstance(String schemaLanguage)"
title: "SchemaFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.newInstance

```java
public static SchemaFactory newInstance(String schemaLanguage)
```

Obtains a new instance of a `SchemaFactory` that supports
 the specified schema language. This method uses the
 JAXP Lookup Mechanism
 to determine and load the `SchemaFactory` implementation that supports
 the specified schema language.

 Tip for Trouble-shooting:
 

See `load` for
 exactly how a property file is parsed. In particular, colons ':'
 need to be escaped in a property file, so make sure schema language
 URIs are properly escaped in it. For example:
 
```

 http\://www.w3.org/2001/XMLSchema=org.acme.foo.XSSchemaFactory
 
```

**参数**

- **schemaLanguage** — Specifies the schema language which the returned SchemaFactory will understand. See the list of available schema languages for the possible values.

**返回**

- New instance of a `SchemaFactory`

**异常**

- **IllegalArgumentException** — If no implementation of the schema language is available.
- **NullPointerException** — If the `schemaLanguage` parameter is null.
- **SchemaFactoryConfigurationError** — If a configuration error is encountered.

**参见**

- #newInstance(String schemaLanguage, String factoryClassName, ClassLoader classLoader)
