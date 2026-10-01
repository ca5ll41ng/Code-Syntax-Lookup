---
id: "java-en-function-relationservicembean-getpurgeflag"
language: "java"
lang: "en"
category: "function"
name: "RelationServiceMBean.getPurgeFlag"
signature: "public boolean getPurgeFlag()"
title: "RelationServiceMBean.getPurgeFlag"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationServiceMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationServiceMBean.getPurgeFlag

```java
public boolean getPurgeFlag()
```

Returns the flag to indicate if when a notification is received for the
 unregistration of an MBean referenced in a relation, if an immediate
 "purge" of the relations (look for the relations no longer valid)
 has to be performed, or if that will be performed only when the
 purgeRelations method is explicitly called.
 

true is immediate purge.

**返回**

- true if purges are immediate.

**参见**

- #setPurgeFlag
