---
id: "java-en-function-relationservicembean-findassociatedmbeans"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.findAssociatedMBeans"
signature: "public Map<ObjectName,List<String>> findAssociatedMBeans(ObjectName mbeanName, String relationTypeName, String roleName) throws IllegalArgumentException"
title: "RelationServiceMBean.findAssociatedMBeans"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.findAssociatedMBeans

```java
public Map<ObjectName,List<String>> findAssociatedMBeans(ObjectName mbeanName, String relationTypeName, String roleName) throws IllegalArgumentException
```

Retrieves the MBeans associated to given one in a relation.
 

This corresponds to CIM Associators and AssociatorNames operations.

**参数**

- **mbeanName** — ObjectName of MBean
- **relationTypeName** — can be null; if specified, only the relations of that type will be considered in the search. Else all relation types are considered.
- **roleName** — can be null; if specified, only the relations where the MBean is referenced in that role will be considered. Else all roles are considered.

**返回**

- an HashMap, where the keys are the ObjectNames of the MBeans associated to given MBean, and the value is, for each key, an ArrayList of the relation ids of the relations where the key MBean is associated to given one (as they can be associated in several different relations).

**异常**

- **IllegalArgumentException** — if null parameter
