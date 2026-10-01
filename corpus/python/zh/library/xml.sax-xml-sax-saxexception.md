---
id: "python-zh-function-xml-sax-saxexception"
language: "python"
lang: "zh"
category: "function"
name: "SAXException"
signature: "SAXException(msg, exception=None)"
directive: "exception"
module: "xml.sax"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.html#xml.sax.SAXException"
license: "PSF"
updated: "2026-10-01"
---

# SAXException

Encapsulate an XML error or warning.  This class can contain basic error or
warning information from either the XML parser or the application: it can be
subclassed to provide additional functionality or to add localization.  Note
that although the handlers defined in the
`~xml.sax.handler.ErrorHandler` interface
receive instances of this exception, it is not required to actually raise the
exception --- it is also useful as a container for information.

When instantiated, *msg* should be a human-readable description of the error.
The optional *exception* parameter, if given, should be `None` or an exception
that was caught by the parsing code and is being passed along as information.

这是其他 SAX 异常类的基类。
