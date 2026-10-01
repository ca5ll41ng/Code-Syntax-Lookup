---
id: "java-en-function-jmxconnectorserverfactory-default_class_loader_name"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerFactory.DEFAULT_CLASS_LOADER_NAME"
signature: "public static final String DEFAULT_CLASS_LOADER_NAME = \"jmx.remote.default.class.loader.name\""
title: "JMXConnectorServerFactory.DEFAULT_CLASS_LOADER_NAME"
directive: "field"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerFactory.DEFAULT_CLASS_LOADER_NAME

```java
public static final String DEFAULT_CLASS_LOADER_NAME = "jmx.remote.default.class.loader.name"
```

Name of the attribute that specifies the default class
 loader MBean name.  This class loader is used to deserialize objects in
 requests received from the client, possibly after consulting an
 MBean-specific class loader.  The value associated with this
 attribute is an instance of `javax.management.ObjectName
 ObjectName`.
