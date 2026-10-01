---
id: "java-en-function-modelmbean-setmodelmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "ModelMBean.setModelMBeanInfo"
signature: "public void setModelMBeanInfo(ModelMBeanInfo inModelMBeanInfo) throws MBeanException, RuntimeOperationsException"
title: "ModelMBean.setModelMBeanInfo"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBean.setModelMBeanInfo

```java
public void setModelMBeanInfo(ModelMBeanInfo inModelMBeanInfo) throws MBeanException, RuntimeOperationsException
```

Initializes a ModelMBean object using ModelMBeanInfo passed in.
 This method makes it possible to set a customized ModelMBeanInfo on
 the ModelMBean as long as it is not registered with the MBeanServer.
 

 Once the ModelMBean's ModelMBeanInfo (with Descriptors) are
 customized and set on the ModelMBean, the  ModelMBean can be
 registered with the MBeanServer.
 

 If the ModelMBean is currently registered, this method throws
 a `javax.management.RuntimeOperationsException` wrapping an
 `IllegalStateException`

**参数**

- **inModelMBeanInfo** — The ModelMBeanInfo object to be used by the ModelMBean.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — - Wraps an `IllegalArgumentException` if the MBeanInfo passed in parameter is null.  - Wraps an `IllegalStateException` if the ModelMBean is currently registered in the MBeanServer.
