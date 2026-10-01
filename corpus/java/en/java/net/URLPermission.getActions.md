---
id: "java-en-function-urlpermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "URLPermission.getActions"
signature: "public String getActions()"
title: "URLPermission.getActions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLPermission.getActions

```java
public String getActions()
```

Returns the normalized method list and request
 header list, in the form:
 
```

      "method-names : header-names"
 
```

 

 where method-names is the list of methods separated by commas
 and header-names is the list of permitted headers separated by commas.
 There is no white space in the returned String. If header-names is empty
 then the colon separator may not be present.
