---
id: "java-en-function-relationservice-findreferencingrelations"
language: "java"
lang: "en"
category: "function"
name: "RelationService.findReferencingRelations"
signature: "public Map<String,List<String>> findReferencingRelations(ObjectName mbeanName, String relationTypeName, String roleName) throws IllegalArgumentException"
title: "RelationService.findReferencingRelations"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.findReferencingRelations

```java
public Map<String,List<String>> findReferencingRelations(ObjectName mbeanName, String relationTypeName, String roleName) throws IllegalArgumentException
```

Retrieves the relations where a given MBean is referenced.
 

This corresponds to the CIM "References" and "ReferenceNames"
 operations.

**参数**

- **mbeanName** — ObjectName of MBean
- **relationTypeName** — can be null; if specified, only the relations of that type will be considered in the search. Else all relation types are considered.
- **roleName** — can be null; if specified, only the relations where the MBean is referenced in that role will be returned. Else all roles are considered.

**返回**

- an HashMap, where the keys are the relation ids of the relations where the MBean is referenced, and the value is, for each key, an ArrayList of role names (as an MBean can be referenced in several roles in the same relation).

**异常**

- **IllegalArgumentException** — if null parameter
