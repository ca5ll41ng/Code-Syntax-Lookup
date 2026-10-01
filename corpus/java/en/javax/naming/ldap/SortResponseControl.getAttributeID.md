---
id: "java-en-function-sortresponsecontrol-getattributeid"
language: "java"
lang: "en"
category: "function"
name: "SortResponseControl.getAttributeID"
signature: "public String getAttributeID()"
title: "SortResponseControl.getAttributeID"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/SortResponseControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortResponseControl.getAttributeID

```java
public String getAttributeID()
```

Retrieves the ID of the attribute that caused the sort to fail.
 Returns null if no ID was returned by the server.

**返回**

- The possibly null ID of the bad attribute.
