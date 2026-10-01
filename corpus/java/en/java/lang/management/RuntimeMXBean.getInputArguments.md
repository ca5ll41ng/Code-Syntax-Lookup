---
id: "java-en-function-runtimemxbean-getinputarguments"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getInputArguments"
signature: "public java.util.List<String> getInputArguments()"
title: "RuntimeMXBean.getInputArguments"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getInputArguments

```java
public java.util.List<String> getInputArguments()
```

Returns the input arguments passed to the Java virtual machine
 which does not include the arguments to the `main` method.
 This method returns an empty list if there is no input argument
 to the Java virtual machine.
 

 Some Java virtual machine implementations may take input arguments
 from multiple different sources: for examples, arguments passed from
 the application that launches the Java virtual machine such as
 the 'java' command, environment variables, configuration files, etc.
 

 Typically, not all command-line options to the 'java' command
 are passed to the Java virtual machine.
 Thus, the returned input arguments may not
 include all command-line options.

 

 **MBeanServer access**:

 The mapped type of `List` is `String[]`.

**返回**

- a list of `String` objects; each element is an argument passed to the Java virtual machine.
