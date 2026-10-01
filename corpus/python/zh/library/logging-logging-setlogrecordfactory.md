---
id: "python-zh-function-logging-setlogrecordfactory"
language: "python"
lang: "zh"
category: "function"
name: "setLogRecordFactory"
signature: "setLogRecordFactory(factory)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/zh-cn/3/library/logging.html#logging.setLogRecordFactory"
license: "PSF"
updated: "2026-10-01"
---

# setLogRecordFactory

设置一个用来创建 :class:`LogRecord` 的可调用对象。

:param factory: The factory callable to be used to instantiate a log record.

> *Added in 3.2*: This function has been provided, along with :func:`getLogRecordFactory`, to allow developers more control over how the :class:`LogRecord` representing a logging event is constructed.

可调用对象 factory 具有如下签名:

``factory(name, level, fn, lno, msg, args, exc_info, func=None, sinfo=None, **kwargs)``

   :name: The logger name.
   :level: The logging level (numeric).
   :fn: The full pathname of the file where the logging call was made.
   :lno: The line number in the file where the logging call was made.
   :msg: The logging message.
   :args: The arguments for the logging message.
   :exc_info: An exception tuple, or `None`.
   :func: The name of the function or method which invoked the logging
          call.
   :sinfo: A stack traceback such as is provided by
           `traceback.print_stack`, showing the call hierarchy.
   :kwargs: Additional keyword arguments.
