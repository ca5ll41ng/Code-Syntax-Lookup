---
id: "java-en-function-java-util-illegalformatprecisionexception"
language: "java"
lang: "en"
category: "function"
name: "java.util.IllegalFormatPrecisionException"
title: "IllegalFormatPrecisionException"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IllegalFormatPrecisionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IllegalFormatPrecisionException

Unchecked exception thrown when the precision is a negative value other than
 `-1`, the conversion does not support a precision, or the value is
 otherwise unsupported. If the precision is not representable by an
 `int` type, then the value `Integer.MIN_VALUE` will be used
 in the exception.

> *Since 1.5*
