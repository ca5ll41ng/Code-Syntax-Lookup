---
id: "java-en-function-sniservername-tostring"
language: "java"
lang: "en"
category: "function"
name: "SNIServerName.toString"
signature: "public String toString()"
title: "SNIServerName.toString"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIServerName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIServerName.toString

```java
public String toString()
```

Returns a string representation of this server name, including the server
 name type and the encoded server name value in this
 `SNIServerName` object.
 

 The exact details of the representation are unspecified and subject
 to change, but the following may be regarded as typical:
 
```

     "type=, value="
 
```

 

 In this class, the format of "" is
 "[LITERAL] (INTEGER)", where the optional "LITERAL" is the literal
 name, and INTEGER is the integer value of the name type.  The format
 of "" is "XX:...:XX", where "XX" is the
 hexadecimal digit representation of a byte value. For example, a
 returned value of a pseudo server name may look like:
 
```

     "type=(31), value=77:77:77:2E:65:78:61:6D:70:6C:65:2E:63:6E"
 
```

 or
 
```

     "type=host_name (0), value=77:77:77:2E:65:78:61:6D:70:6C:65:2E:63:6E"
 
```

 

 Please NOTE that the exact details of the representation are unspecified
 and subject to change, and subclasses may override the method with
 their own formats.

**返回**

- a string representation of this server name
