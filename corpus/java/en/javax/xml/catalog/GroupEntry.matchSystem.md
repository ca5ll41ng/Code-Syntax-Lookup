---
id: "java-en-function-groupentry-matchsystem"
language: "java"
lang: "en"
category: "function"
name: "GroupEntry.matchSystem"
signature: "public String matchSystem(String systemId)"
title: "GroupEntry.matchSystem"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/GroupEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupEntry.matchSystem

```java
public String matchSystem(String systemId)
```

Attempt to find a matching entry in the catalog by systemId.

 

 The method searches through the system-type entries, including system,
 rewriteSystem, systemSuffix, delegateSystem, and group entries in the
 current catalog in order to find a match.

**参数**

- **systemId** — The system identifier of the external entity being referenced.

**返回**

- a URI string if a mapping is found, or null otherwise.
