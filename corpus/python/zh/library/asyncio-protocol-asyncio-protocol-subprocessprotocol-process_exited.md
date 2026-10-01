---
id: "python-zh-function-asyncio-protocol-subprocessprotocol-process_exited"
language: "python"
lang: "zh"
category: "function"
name: "SubprocessProtocol.process_exited"
signature: "SubprocessProtocol.process_exited()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessProtocol.process_exited"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessProtocol.process_exited

子进程退出时被调用。

It can be called before `~SubprocessProtocol.pipe_data_received` and
`~SubprocessProtocol.pipe_connection_lost` methods.
