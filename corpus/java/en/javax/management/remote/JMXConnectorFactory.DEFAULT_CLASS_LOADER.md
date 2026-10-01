---
id: "java-en-function-jmxconnectorfactory-default_class_loader"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorFactory.DEFAULT_CLASS_LOADER"
signature: "public static final String DEFAULT_CLASS_LOADER = \"jmx.remote.default.class.loader\""
title: "JMXConnectorFactory.DEFAULT_CLASS_LOADER"
directive: "field"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorFactory.DEFAULT_CLASS_LOADER

```java
public static final String DEFAULT_CLASS_LOADER = "jmx.remote.default.class.loader"
```

Name of the attribute that specifies the default class
 loader. This class loader is used to deserialize return values and
 exceptions from remote MBeanServerConnection
 calls.  The value associated with this attribute is an instance
 of `ClassLoader`.
