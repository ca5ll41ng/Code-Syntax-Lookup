---
id: "java-en-function-jmxconnectorserverfactory-default_class_loader"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerFactory.DEFAULT_CLASS_LOADER"
signature: "public static final String DEFAULT_CLASS_LOADER = JMXConnectorFactory.DEFAULT_CLASS_LOADER"
title: "JMXConnectorServerFactory.DEFAULT_CLASS_LOADER"
directive: "field"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerFactory.DEFAULT_CLASS_LOADER

```java
public static final String DEFAULT_CLASS_LOADER = JMXConnectorFactory.DEFAULT_CLASS_LOADER
```

Name of the attribute that specifies the default class
 loader.  This class loader is used to deserialize objects in
 requests received from the client, possibly after consulting an
 MBean-specific class loader.  The value associated with this
 attribute is an instance of `ClassLoader`.
