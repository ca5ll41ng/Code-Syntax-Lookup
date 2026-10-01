---
id: "java-en-function-relation-getreferencedmbeans"
language: "java"
lang: "en"
category: "function"
name: "Relation.getReferencedMBeans"
signature: "public Map<ObjectName,List<String>> getReferencedMBeans()"
title: "Relation.getReferencedMBeans"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Relation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Relation.getReferencedMBeans

```java
public Map<ObjectName,List<String>> getReferencedMBeans()
```

Retrieves MBeans referenced in the various roles of the relation.

**返回**

- a HashMap mapping:   ObjectName -> ArrayList of String (role names)
