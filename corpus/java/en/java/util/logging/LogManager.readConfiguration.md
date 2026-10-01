---
id: "java-en-function-logmanager-readconfiguration"
language: "java"
lang: "en"
category: "function"
name: "LogManager.readConfiguration"
signature: "public void readConfiguration() throws IOException"
title: "LogManager.readConfiguration"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.readConfiguration

```java
public void readConfiguration() throws IOException
```

Reads and initializes the logging configuration.
 

 If the "java.util.logging.config.class" system property is set, then the
 property value is treated as a class name.  The given class will be
 loaded, an object will be instantiated, and that object's constructor
 is responsible for reading in the initial configuration.  (That object
 may use other system properties to control its configuration.)  The
 alternate configuration class can use `readConfiguration(InputStream)`
 to define properties in the LogManager.
 

 If "java.util.logging.config.class" system property is **not** set,
 then this method will read the initial configuration from a properties
 file and calls the `readConfiguration` method to initialize
 the configuration. The "java.util.logging.config.file" system property can be used
 to specify the properties file that will be read as the initial configuration;
 if not set, then the LogManager default configuration is used.
 The default configuration is typically loaded from the
 properties file "`conf/logging.properties`" in the Java installation
 directory.

 

 Any `addConfigurationListener registered configuration
 listener` will be invoked after the properties are read.

 initializing the configuration during LogManager initialization or
 used with the "java.util.logging.config.class" property.
 When this method is called after loggers have been created, and
 the "java.util.logging.config.class" system property is not set, all
 existing loggers will be `reset() reset`. Then any
 existing loggers that have a level property specified in the new
 configuration stream will be `setLevel(java.util.logging.Level) set` to the specified log level.
 

 To properly update the logging configuration, use the
 `updateConfiguration` or
 `updateConfiguration`
 methods instead.

**异常**

- **IOException** — if there are IO problems reading the configuration.
