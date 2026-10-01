---
id: "python-zh-function-select-epoll-unregister"
language: "python"
lang: "zh"
category: "function"
name: "epoll.unregister"
signature: "epoll.unregister(fd)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/zh-cn/3/library/select.html#select.epoll.unregister"
license: "PSF"
updated: "2026-10-01"
---

# epoll.unregister

从 epoll 对象中删除一个已注册的文件描述符。

> *Changed in 3.9*: The method no longer ignores the :data:`~errno.EBADF` error.
