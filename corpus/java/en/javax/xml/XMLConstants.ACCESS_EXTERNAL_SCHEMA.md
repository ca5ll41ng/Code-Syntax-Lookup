---
id: "java-en-function-xmlconstants-access_external_schema"
language: "java"
lang: "en"
category: "function"
name: "XMLConstants.ACCESS_EXTERNAL_SCHEMA"
signature: "public static final String ACCESS_EXTERNAL_SCHEMA = \"http://javax.xml.XMLConstants/property/accessExternalSchema\""
title: "XMLConstants.ACCESS_EXTERNAL_SCHEMA"
directive: "field"
module: "java.xml/javax.xml"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/XMLConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLConstants.ACCESS_EXTERNAL_SCHEMA

```java
public static final String ACCESS_EXTERNAL_SCHEMA = "http://javax.xml.XMLConstants/property/accessExternalSchema"
```

Property: accessExternalSchema

 

 Restrict access to the protocols specified for external reference set by the
 schemaLocation attribute, Import and Include element. If access is denied
 due to the restriction of this property, a runtime exception that is specific
 to the context is thrown. In the case of `javax.xml.validation.SchemaFactory`
 for example, org.xml.sax.SAXException is thrown.

 

 **Value: ** as defined in the class description.

 

 **System Property:** `javax.xml.accessExternalSchema`

 

 **Configuration File:**
 Yes. The property can be set in the
 configuration file.

> *Since 1.7*
