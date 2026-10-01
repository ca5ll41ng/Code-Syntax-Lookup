---
id: "java-en-function-descriptorsupport-isvalid"
language: "java"
lang: "en"
category: "function"
name: "DescriptorSupport.isValid"
signature: "public synchronized boolean isValid() throws RuntimeOperationsException"
title: "DescriptorSupport.isValid"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/DescriptorSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DescriptorSupport.isValid

```java
public synchronized boolean isValid() throws RuntimeOperationsException
```

Returns true if all of the fields have legal values given their
 names.
 

 This implementation does not support  interoperating with a directory
 or lookup service. Thus, conforming to the specification, no checking is
 done on the "export" field.
 

 Otherwise this implementation returns false if:
 
 
-  name and descriptorType fieldNames are not defined, or
 null, or empty, or not String
 
-  class, role, getMethod, setMethod fieldNames, if defined,
 are null or not String
 
-  persistPeriod, currencyTimeLimit, lastUpdatedTimeStamp,
 lastReturnedTimeStamp if defined, are null, or not a Numeric
 String or not a Numeric Value >= -1
 
-  log fieldName, if defined, is null, or not a Boolean or
 not a String with value "t", "f", "true", "false". These String
 values must not be case sensitive.
 
-  visibility fieldName, if defined, is null, or not a
 Numeric String or a not Numeric Value >= 1 and <= 4
 
-  severity fieldName, if defined, is null, or not a Numeric
 String or not a Numeric Value >= 0 and <= 6

 
-  persistPolicy fieldName, if defined, is null, or not one of
 the following strings:

   "OnUpdate", "OnTimer", "NoMoreOftenThan", "OnUnregister", "Always",
   "Never". These String values must not be case sensitive.

**异常**

- **RuntimeOperationsException** — If the validity checking fails for any reason, this exception will be thrown.
