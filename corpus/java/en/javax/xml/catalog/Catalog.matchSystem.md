---
id: "java-en-function-catalog-matchsystem"
language: "java"
lang: "en"
category: "function"
name: "Catalog.matchSystem"
signature: "public String matchSystem(String systemId)"
title: "Catalog.matchSystem"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/Catalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Catalog.matchSystem

```java
public String matchSystem(String systemId)
```

Attempts to find a matching entry in the catalog by systemId.

 

 The method searches through the system-type entries, including `system,
 rewriteSystem, systemSuffix, delegateSystem`, and `group` entries in the
 current catalog in order to find a match.
 

 Resolution follows the steps listed below: 

 
 
- If a matching `system` entry exists, it is returned immediately.
 
- If more than one `rewriteSystem` entry matches, the matching entry with
 the longest normalized `systemIdStartString` value is returned.
 
- If more than one `systemSuffix` entry matches, the matching entry
 with the longest normalized `systemIdSuffix` value is returned.
 
- If more than one `delegateSystem` entry matches, the matching entry
 with the longest matching `systemIdStartString` value is returned.

**参数**

- **systemId** — the system identifier of the entity to be matched

**返回**

- a URI string if a mapping is found, or null otherwise
