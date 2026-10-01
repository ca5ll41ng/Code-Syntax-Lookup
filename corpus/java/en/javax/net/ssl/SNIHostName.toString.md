---
id: "java-en-function-snihostname-tostring"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.toString"
signature: "public String toString()"
title: "SNIHostName.toString"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.toString

```java
public String toString()
```

Returns a string representation of the object, including the DNS
 hostname in this `SNIHostName` object.
 

 The exact details of the representation are unspecified and subject
 to change, but the following may be regarded as typical:
 
```

     "type=host_name (0), value="
 
```

 The "" is an ASCII representation of the hostname,
 which may contain A-labels.  For example, a returned value of a pseudo
 hostname may look like:
 
```

     "type=host_name (0), value=www.example.com"
 
```

 or
 
```

     "type=host_name (0), value=xn--fsqu00a.xn--0zwm56d"
 
```

 

 Please NOTE that the exact details of the representation are unspecified
 and subject to change.

**返回**

- a string representation of the object.
