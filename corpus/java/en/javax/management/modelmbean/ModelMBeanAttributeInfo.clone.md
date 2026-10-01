---
id: "java-en-function-modelmbeanattributeinfo-clone"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanAttributeInfo.clone"
signature: "public Object clone()"
title: "ModelMBeanAttributeInfo.clone"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanAttributeInfo.clone

```java
public Object clone()
```

Creates and returns a new ModelMBeanAttributeInfo which is a duplicate of this ModelMBeanAttributeInfo.

**异常**

- **RuntimeOperationsException** — for illegal value for field Names or field Values.  If the descriptor construction fails for any reason, this exception will be thrown.
