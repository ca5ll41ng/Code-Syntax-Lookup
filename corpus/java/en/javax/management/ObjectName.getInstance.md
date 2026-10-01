---
id: "java-en-function-objectname-getinstance"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getInstance"
signature: "public static ObjectName getInstance(String name) throws MalformedObjectNameException, NullPointerException"
title: "ObjectName.getInstance"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getInstance

```java
public static ObjectName getInstance(String name) throws MalformedObjectNameException, NullPointerException
```

Return an instance of ObjectName that can be used anywhere
 an object obtained with `ObjectName(String) new
 ObjectName` can be used.  The returned object may be of
 a subclass of ObjectName.  Calling this method twice with the
 same parameters may return the same object or two equal but
 not identical objects.

**参数**

- **name** — A string representation of the object name.

**返回**

- an ObjectName corresponding to the given String.

**异常**

- **MalformedObjectNameException** — The string passed as a parameter does not have the right format.
- **NullPointerException** — The name parameter is null.
