---
id: "python-zh-function-logging-getlogrecordfactory"
language: "python"
lang: "zh"
category: "function"
name: "getLogRecordFactory"
signature: "getLogRecordFactory()"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/zh-cn/3/library/logging.html#logging.getLogRecordFactory"
license: "PSF"
updated: "2026-10-01"
---

# getLogRecordFactory

返回一个被用来创建 :class:`LogRecord` 的可调用对象。

> *Added in 3.2*: This function has been provided, along with :func:`setLogRecordFactory`, to allow developers more control over how the :class:`LogRecord` representing a logging event is constructed.

See `setLogRecordFactory` for more information about the how the
factory is called.
