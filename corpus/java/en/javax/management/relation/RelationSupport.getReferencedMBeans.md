---
id: "java-en-function-relationsupport-getreferencedmbeans"
language: "java"
lang: "en"
category: "function"
name: "RelationSupport.getReferencedMBeans"
signature: "public Map<ObjectName,List<String>> getReferencedMBeans()"
title: "RelationSupport.getReferencedMBeans"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationSupport.getReferencedMBeans

```java
public Map<ObjectName,List<String>> getReferencedMBeans()
```

Retrieves MBeans referenced in the various roles of the relation.

**返回**

- a HashMap mapping:   ObjectName -> ArrayList of String (role names)
