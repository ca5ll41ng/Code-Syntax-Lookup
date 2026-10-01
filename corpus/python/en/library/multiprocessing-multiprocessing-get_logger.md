---
id: "python-en-function-multiprocessing-get_logger"
language: "python"
lang: "en"
category: "function"
name: "get_logger"
signature: "get_logger()"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.get_logger"
license: "PSF"
updated: "2026-10-01"
---

# get_logger

Returns the logger used by `multiprocessing`.  If necessary, a new one
will be created.

When first created the logger has level `logging.NOTSET` and no
default handler. Messages sent to this logger will not by default propagate
to the root logger.

Note that on Windows child processes will only inherit the level of the
parent process's logger -- any other customization of the logger will not be
inherited.
