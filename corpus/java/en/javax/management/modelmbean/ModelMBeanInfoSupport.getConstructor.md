---
id: "java-en-function-modelmbeaninfosupport-getconstructor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfoSupport.getConstructor"
signature: "public ModelMBeanConstructorInfo getConstructor(String inName) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfoSupport.getConstructor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfoSupport.getConstructor

```java
public ModelMBeanConstructorInfo getConstructor(String inName) throws MBeanException, RuntimeOperationsException
```

Returns the ModelMBeanConstructorInfo requested by name.
 If no ModelMBeanConstructorInfo exists for this name null is returned.

**参数**

- **inName** — the name of the constructor.

**返回**

- the constructor info for the named constructor, or null if there is none.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null constructor name.
