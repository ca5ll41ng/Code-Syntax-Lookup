---
id: "java-en-function-objectname-apply"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.apply"
signature: "public boolean apply(ObjectName name)"
title: "ObjectName.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.apply

```java
public boolean apply(ObjectName name)
```

Test whether this ObjectName, which may be a pattern,
 matches another ObjectName.  If name is a pattern,
 the result is false.  If this ObjectName is a pattern, the
 result is true if and only if name matches the
 pattern.  If neither this ObjectName nor name is
 a pattern, the result is true if and only if the two
 ObjectNames are equal as described for the `equals` method.

**参数**

- **name** — The name of the MBean to compare to.

**返回**

- True if name matches this ObjectName.

**异常**

- **NullPointerException** — if name is null.
