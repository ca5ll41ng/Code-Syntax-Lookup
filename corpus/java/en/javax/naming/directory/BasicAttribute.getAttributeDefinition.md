---
id: "java-en-function-basicattribute-getattributedefinition"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.getAttributeDefinition"
signature: "public DirContext getAttributeDefinition() throws NamingException"
title: "BasicAttribute.getAttributeDefinition"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.getAttributeDefinition

```java
public DirContext getAttributeDefinition() throws NamingException
```

Retrieves this attribute's schema definition.

 This method by default throws OperationNotSupportedException. A subclass
 should override this method if it supports schema.

**异常**

- **OperationNotSupportedException** — {@inheritDoc}
