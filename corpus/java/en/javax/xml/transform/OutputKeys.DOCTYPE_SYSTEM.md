---
id: "java-en-function-outputkeys-doctype_system"
language: "java"
lang: "en"
category: "function"
name: "OutputKeys.DOCTYPE_SYSTEM"
signature: "public static final String DOCTYPE_SYSTEM = \"doctype-system\""
title: "OutputKeys.DOCTYPE_SYSTEM"
directive: "field"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/OutputKeys.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputKeys.DOCTYPE_SYSTEM

```java
public static final String DOCTYPE_SYSTEM = "doctype-system"
```

doctype-system = string.
 

doctype-system specifies the system identifier
 to be used in the document type declaration.
 

If the doctype-system property is specified, the xml output method
 should output a document type declaration immediately before the first
 element. The name following &lt;!DOCTYPE should be the name of the first
 element. If doctype-public property is also specified, then the xml
 output method should output PUBLIC followed by the public identifier
 and then the system identifier; otherwise, it should output SYSTEM
 followed by the system identifier. The internal subset should be empty.
 The value of the doctype-public property should be ignored unless the doctype-system
 property is specified.
 

If the doctype-public or doctype-system properties are specified,
 then the html output method should output a document type declaration
 immediately before the first element. The name following &lt;!DOCTYPE
 should be HTML or html. If the doctype-public property is specified,
 then the output method should output PUBLIC followed by the specified
 public identifier; if the doctype-system property is also specified,
 it should also output the specified system identifier following the
 public identifier. If the doctype-system property is specified but
 the doctype-public property is not specified, then the output method
 should output SYSTEM followed by the specified system identifier.

 

doctype-system specifies the system identifier
 to be used in the document type declaration.

**参见**

- section 16 of the XSL Transformations (XSLT) W3C Recommendation
