---
id: "python-zh-function-xml-sax-handler-contenthandler-skippedentity"
language: "python"
lang: "zh"
category: "function"
name: "ContentHandler.skippedEntity"
signature: "ContentHandler.skippedEntity(name)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.skippedEntity"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.skippedEntity

接收一个已跳过实体的通知。

The Parser will invoke this method once for each entity skipped. Non-validating
processors may skip entities if they have not seen the declarations (because,
for example, the entity was declared in an external DTD subset). All processors
may skip external entities, depending on the values of the
`feature_external_ges` and the `feature_external_pes` properties.
