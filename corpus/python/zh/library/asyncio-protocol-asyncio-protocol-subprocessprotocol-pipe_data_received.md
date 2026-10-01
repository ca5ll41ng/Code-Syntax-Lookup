---
id: "python-zh-function-asyncio-protocol-subprocessprotocol-pipe_data_received"
language: "python"
lang: "zh"
category: "function"
name: "SubprocessProtocol.pipe_data_received"
signature: "SubprocessProtocol.pipe_data_received(fd, data)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessProtocol.pipe_data_received"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessProtocol.pipe_data_received

Called when the child process writes data into its stdout or stderr
pipe.

*fd* 是以整数表示的管道文件描述符。

*data* 是包含已接收数据的非空字节串对象。
