---
id: "java-en-function-attribute-getattributedefinition"
language: "java"
lang: "en"
category: "function"
name: "Attribute.getAttributeDefinition"
signature: "DirContext getAttributeDefinition() throws NamingException"
title: "Attribute.getAttributeDefinition"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.getAttributeDefinition

```java
DirContext getAttributeDefinition() throws NamingException
```

Retrieves the attribute's schema definition.
 An attribute's schema definition contains information
 such as whether the attribute is multivalued or single-valued,
 the matching rules to use when comparing the attribute's values.

 The information that you can retrieve from an attribute definition
 is directory-dependent.

 If an implementation does not support schemas, it should throw
 OperationNotSupportedException. If an implementation does support
 schemas, it should define this method to return the appropriate
 information.

**返回**

- This attribute's schema definition. Null if the implementation supports schemas but this particular attribute does not have any schema information.

**异常**

- **OperationNotSupportedException** — If getting the schema is not supported.
- **NamingException** — If a naming exception occurs while getting the schema.
