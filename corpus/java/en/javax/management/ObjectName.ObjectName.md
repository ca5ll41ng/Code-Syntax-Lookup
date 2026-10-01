---
id: "java-en-function-objectname-objectname"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.ObjectName"
signature: "public ObjectName(String name) throws MalformedObjectNameException"
title: "ObjectName.ObjectName"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.ObjectName

```java
public ObjectName(String name) throws MalformedObjectNameException
```

Construct an object name from the given string.

**参数**

- **name** — A string representation of the object name.

**异常**

- **MalformedObjectNameException** — The string passed as a parameter does not have the right format.
- **NullPointerException** — The name parameter is null.
