---
id: "java-en-function-recordcomponentinfo-descriptorsymbol"
language: "java"
lang: "en"
category: "function"
name: "RecordComponentInfo.descriptorSymbol"
signature: "default ClassDesc descriptorSymbol()"
title: "RecordComponentInfo.descriptorSymbol"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RecordComponentInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordComponentInfo.descriptorSymbol

```java
default ClassDesc descriptorSymbol()
```

{@return the symbolic field descriptor of this component}

 A record component may have a generic type; this information is stored
 in the `SignatureAttribute Signature` attribute in this component.

**参见**

- RecordComponent#getType()
