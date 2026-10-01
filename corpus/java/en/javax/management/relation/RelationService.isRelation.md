---
id: "java-en-function-relationservice-isrelation"
language: "java"
lang: "en"
category: "function"
name: "RelationService.isRelation"
signature: "public String isRelation(ObjectName objectName) throws IllegalArgumentException"
title: "RelationService.isRelation"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.isRelation

```java
public String isRelation(ObjectName objectName) throws IllegalArgumentException
```

Returns the relation id associated to the given ObjectName if the
 MBean has been added as a relation in the Relation Service.

**参数**

- **objectName** — ObjectName of supposed relation

**返回**

- relation id (String) or null (if the ObjectName is not a relation handled by the Relation Service)

**异常**

- **IllegalArgumentException** — if null parameter
