---
id: "java-en-function-logmanager-updateconfiguration"
language: "java"
lang: "en"
category: "function"
name: "LogManager.updateConfiguration"
signature: "public void updateConfiguration(Function<String, BiFunction<String,String,String>> mapper) throws IOException"
title: "LogManager.updateConfiguration"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.updateConfiguration

```java
public void updateConfiguration(Function<String, BiFunction<String,String,String>> mapper) throws IOException
```

Updates the logging configuration.
 

 If the "java.util.logging.config.file" system property is set,
 then the property value specifies the properties file to be read
 as the new configuration. Otherwise, the LogManager default
 configuration is used.
 
The default configuration is typically loaded from the
 properties file "`conf/logging.properties`" in the
 Java installation directory.
 

 This method reads the new configuration and calls the `updateConfiguration(java.io.InputStream, java.util.function.Function)
 updateConfiguration` method to
 update the configuration.

 This method updates the logging configuration from reading
 a properties file and ignores the "java.util.logging.config.class"
 system property.  The "java.util.logging.config.class" property is
 only used by the `readConfiguration`  method to load a custom
 configuration class as an initial configuration.

**参数**

- **mapper** — a functional interface that takes a configuration key k and returns a function f(o,n) whose returned value will be applied to the resulting configuration. The function f may return `null` to indicate that the property k will not be added to the resulting configuration.   If `mapper` is `null` then `(k) -> ((o, n) -> n)` is assumed.   For each k, the mapped function f will be invoked with the value associated with k in the old configuration (i.e o) and the value associated with k in the new configuration (i.e. n).  A `null` value for o or n indicates that no value was present for k in the corresponding configuration.

**异常**

- **NullPointerException** — if `mapper` returns a `null` function when invoked.
- **IOException** — if there are problems reading from the logging configuration file.

**参见**

- #updateConfiguration(java.io.InputStream, java.util.function.Function)

> *Since 9*
