---
id: "java-en-function-basicattribute-getattributesyntaxdefinition"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.getAttributeSyntaxDefinition"
signature: "public DirContext getAttributeSyntaxDefinition() throws NamingException"
title: "BasicAttribute.getAttributeSyntaxDefinition"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.getAttributeSyntaxDefinition

```java
public DirContext getAttributeSyntaxDefinition() throws NamingException
```

Retrieves the syntax definition associated with this attribute.

 This method by default throws OperationNotSupportedException. A subclass
 should override this method if it supports schema.

**异常**

- **OperationNotSupportedException** — {@inheritDoc}
