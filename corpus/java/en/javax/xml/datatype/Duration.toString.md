---
id: "java-en-function-duration-tostring"
language: "java"
lang: "en"
category: "function"
name: "Duration.toString"
signature: "public String toString()"
title: "Duration.toString"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.toString

```java
public String toString()
```

Returns a `String` representation of this `Duration Object`.

 

The result is formatted according to the XML Schema 1.0 spec
 and can be always parsed back later into the
 equivalent `Duration Object` by `newDuration`.

 

Formally, the following holds for any `Duration`
 `Object` x:
 
```

 new Duration(x.toString()).equals(x)
 
```

**返回**

- A non-`null` valid `String` representation of this `Duration`.
